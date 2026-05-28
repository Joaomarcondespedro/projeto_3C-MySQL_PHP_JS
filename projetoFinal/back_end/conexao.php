<?php

$servidor = "localhost";
$usuario = "admin";
$senha = "sua_senha_aqui";
$banco = "projetoFinal";

$conn = new mysqli($servidor, $usuario, $senha, $banco);

if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}
