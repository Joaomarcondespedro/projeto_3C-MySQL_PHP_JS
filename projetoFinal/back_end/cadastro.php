<?php

include 'conexao.php';


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $numero = $_POST['numero'];
    $email = $_POST['email'];

    $novoNome = null;
    if (isset($_FILES['imagem']) && $_FILES['imagem']['error'] === UPLOAD_ERR_OK) {
        $arquivo = $_FILES['imagem'];
        $nomeOriginal = $arquivo['name'];
        $caminhoTemporario = $arquivo['tmp_name'];

        $diretorioDestino = "../imgs/";

        if (!is_dir($diretorioDestino)) {
            mkdir($diretorioDestino, 0755, true);
        }

        if (!is_writable($diretorioDestino)) {
            die("Erro: A pasta de imagens não tem permissão de escrita.");
        }

        $extensao = pathinfo($nomeOriginal, PATHINFO_EXTENSION);
        $novoNome = date('Ymd_His') . '_' . uniqid() . '.' . $extensao;
        $caminhoFinal = $diretorioDestino . $novoNome;

        move_uploaded_file($caminhoTemporario, $caminhoFinal);
    }

    $sql = "INSERT INTO cadastros (nome, `n#`, email, img) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("siss", $nome, $numero, $email, $novoNome);

    if ($stmt->execute()) {
        header("location: ../index.html");
        exit();
    } else {
        echo "Erro: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
