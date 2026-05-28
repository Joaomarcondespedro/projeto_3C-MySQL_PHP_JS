<?php

include 'conexao.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $numero = $_POST['numero'];
    $imgFinal = $_POST['imagem_atual'];
    $diretorioDestino = "../imgs/";

    if (!is_dir($diretorioDestino)) {
        mkdir($diretorioDestino, 0755, true);
    }

    if (isset($_FILES['imagem']) && $_FILES['imagem']['error'] === UPLOAD_ERR_OK) {
        $extensao = pathinfo($_FILES['imagem']['name'], PATHINFO_EXTENSION);
        $novoNome = date('Ymd_His') . '_' . uniqid() . '.' . $extensao;

        if (move_uploaded_file($_FILES['imagem']['tmp_name'], $diretorioDestino . $novoNome)) {
            if (!empty($_POST['imagem_atual'])) {
                $caminhoAntigo = $diretorioDestino . $_POST['imagem_atual'];
                if (file_exists($caminhoAntigo)) {
                    unlink($caminhoAntigo);
                }
            }
            $imgFinal = $novoNome;
        }
    }

    $sql = "UPDATE cadastros SET nome = ?, `n#` = ?, email = ?, img = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sissi", $nome, $numero, $email, $imgFinal, $id);


    if ($stmt->execute()) {
        header("location: ../index.html");
        exit();
    } else {
        echo "Erro: " . $stmt->error;
    }
    $stmt->close();
}
$conn->close();
