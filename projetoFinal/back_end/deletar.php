<?php

include 'conexao.php';

header('Content-Type: application/json');

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $sql_busca = "SELECT img FROM cadastros WHERE id = ?";
    $stmt_busca = $conn->prepare($sql_busca);
    $stmt_busca->bind_param("i", $id);
    $stmt_busca->execute();
    $resultado = $stmt_busca->get_result();
    $dados = $resultado->fetch_assoc();

    if ($dados) {
        $nomeImagem = $dados['img'];

        $sql_delete = "DELETE FROM cadastros WHERE id = ?";
        $stmt_delete = $conn->prepare($sql_delete);
        $stmt_delete->bind_param("i", $id);

        if ($stmt_delete->execute()) {
            if (!empty($nomeImagem)) {
                $caminhoArquivo = "../imgs/" . $nomeImagem;

                if (file_exists($caminhoArquivo)) {
                    unlink($caminhoArquivo);
                }
            }
        }
        $stmt_delete->close();
    }
    $stmt_busca->close();
}
$conn->close();
