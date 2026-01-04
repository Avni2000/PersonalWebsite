<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$messagesFile = __DIR__ . '/messages.json';

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get POST data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data || !isset($data['message']) || empty(trim($data['message']))) {
    http_response_code(400);
    echo json_encode(['error' => 'Message is required']);
    exit();
}

// Read existing messages
$messages = [];
if (file_exists($messagesFile)) {
    $content = file_get_contents($messagesFile);
    $messages = json_decode($content, true) ?: [];
}

// Create new message
$newMessage = [
    'id' => (string)time() . rand(1000, 9999),
    'message' => trim($data['message']),
    'from' => isset($data['from']) ? $data['from'] : 'Anonymous',
    'timestamp' => date('c'),
    'read' => false
];

// Add to messages array
$messages[] = $newMessage;

// Save to file
if (file_put_contents($messagesFile, json_encode($messages, JSON_PRETTY_PRINT))) {
    http_response_code(201);
    echo json_encode([
        'success' => true,
        'message' => 'Message sent!'
    ]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to save message']);
}
?>
