<?php

$json_tasks_data = file_get_contents('../data/todo-data.json');
$tasks_list = json_decode($json_tasks_data, true);
$tasks_list[$_POST['index']]['done'] = $_POST['state'] === 'true';
// var_dump($tasks_list);
$json_res = json_encode($tasks_list);
file_put_contents('../data/todo-data.json', $json_res);
header('Content-Type: application/json');
echo $json_res;
