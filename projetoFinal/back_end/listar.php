<?php

include 'conexao.php';

header('Content-type: application/json');

$sql = "SELECT * FROM cadastros";
$resultado = $conn->query($sql);
$dados = [];

if ($resultado->num_rows > 0) {
    while ($linha = $resultado->fetch_object()) {
        $dados[] = $linha;
    }
}

echo json_encode($dados);
$conn->close();
