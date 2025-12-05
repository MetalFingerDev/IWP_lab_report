<?php
session_start();
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['start'])) {
        $_SESSION['score'] = 0;
        $_SESSION['current'] = 0;
    } elseif (isset($_POST['answer'])) {
        $result = $conn->query("SELECT correct_answer FROM questions LIMIT {$_SESSION['current']}, 1");
        $row = $result->fetch_assoc();
        if ($_POST['answer'] == $row['correct_answer']) $_SESSION['score']++;
        $_SESSION['current']++;
    }
}

$total = $conn->query("SELECT COUNT(*) as c FROM questions")->fetch_assoc()['c'];

if (isset($_SESSION['current']) && $_SESSION['current'] >= $total) {
    $score = $_SESSION['score'];
    session_destroy();
    echo "<html><head><title>Result</title><link rel='stylesheet' href='style.css'></head><body>";
    echo "<div class='container'><h1>Quiz Complete</h1>";
    echo "<p>Your Score: $score / $total</p>";
    echo "<a href='index.php'>Try Again</a></div></body></html>";
    exit;
}

if (!isset($_SESSION['current'])) {
    echo "<html><head><title>Quiz</title><link rel='stylesheet' href='style.css'></head><body>";
    echo "<div class='container'><h1>Online Quiz</h1>";
    echo "<form method='post'><button name='start'>Start Quiz</button></form></div></body></html>";
    exit;
}

$q = $conn->query("SELECT * FROM questions LIMIT {$_SESSION['current']}, 1")->fetch_assoc();
?>
<html>
<head><title>Quiz</title><link rel="stylesheet" href="style.css"></head>
<body>
<div class="container">
    <h1>Question <?php echo $_SESSION['current'] + 1; ?> of <?php echo $total; ?></h1>
    <p><?php echo $q['question']; ?></p>
    <form method="post">
        <label><input type="radio" name="answer" value="A" required> A. <?php echo $q['option_a']; ?></label>
        <label><input type="radio" name="answer" value="B"> B. <?php echo $q['option_b']; ?></label>
        <label><input type="radio" name="answer" value="C"> C. <?php echo $q['option_c']; ?></label>
        <label><input type="radio" name="answer" value="D"> D. <?php echo $q['option_d']; ?></label>
        <button type="submit">Next</button>
    </form>
</div>
</body>
</html>
