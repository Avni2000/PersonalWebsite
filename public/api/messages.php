<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$messagesFile = __DIR__ . '/messages.json';

// Only accept GET requests
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Read messages
$messages = [];
if (file_exists($messagesFile)) {
    $content = file_get_contents($messagesFile);
    $messages = json_decode($content, true) ?: [];
}

echo json_encode([
    'messages' => $messages,
    'count' => count($messages)
]);
?>
