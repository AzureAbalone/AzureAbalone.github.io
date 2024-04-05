<?php
$name = "test";
$api_token = 'fbaae39a-1773-4c8b-beeb-fa5ed858ae9a';
$api_url = "https://web1s.com/note-api?token={$api_token}&content={$name}";
$result = @json_decode(file_get_contents($api_url), TRUE);
if ($result["status"] === 'error') {
    echo $result["message"];
} else {
    echo $result["shortenedUrl"];
}
?>
