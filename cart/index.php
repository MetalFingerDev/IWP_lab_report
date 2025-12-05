<?php
session_start();

$prods = [
    1 => ['name' => 'Apple', 'price' => 0.50],
    2 => ['name' => 'Banana', 'price' => 0.30],
    3 => ['name' => 'Carrot', 'price' => 0.20],
];

$act = $_GET['action'] ?? '';
$id = (int)($_GET['id'] ?? 0);

if ($act === 'add' && $id && isset($prods[$id])) {
    $_SESSION['cart'][$id] = ($_SESSION['cart'][$id] ?? 0) + 1;
    header('Location: index.php'); exit;
}
if ($act === 'remove' && $id) {
    unset($_SESSION['cart'][$id]);
    header('Location: index.php?action=cart'); exit;
}
if ($act === 'clear') {
    unset($_SESSION['cart']);
    header('Location: index.php'); exit;
}
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['qty'])) {
    foreach ($_POST['qty'] as $pid => $q) {
        $pid = (int)$pid; $q = (int)$q;
        if ($q <= 0) unset($_SESSION['cart'][$pid]);
        else $_SESSION['cart'][$pid] = $q;
    }
    header('Location: index.php?action=cart'); exit;
}

function cartCount() { return array_sum($_SESSION['cart'] ?? []); }
function cartTotal($cart, $prods) {
    $t = 0;
    foreach ($cart as $id => $q) if (isset($prods[$id])) $t += $prods[$id]['price'] * $q;
    return $t;
}

$cart = $_SESSION['cart'] ?? [];
$show = ($act === 'cart');
$cnt = cartCount();
$tot = cartTotal($cart, $prods);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping Cart</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div id="notif" class="notification"></div>

<?php if ($show): ?>
    <h1>🛒 Your Cart</h1>
    <p><a href="index.php" class="btn">← Continue Shopping</a></p>
    <?php if (empty($cart)): ?>
        <div class="empty">Your cart is empty</div>
    <?php else: ?>
        <form method="POST">
            <table>
                <thead><tr><th>Product</th><th>Price</th><th>Qty</th><th>Subtotal</th><th></th></tr></thead>
                <tbody>
                <?php foreach ($cart as $pid => $q): if (!isset($prods[$pid])) continue; $p = $prods[$pid]; $sub = $p['price'] * $q; ?>
                    <tr data-id="<?=$pid?>" data-price="<?=$p['price']?>">
                        <td><?=htmlspecialchars($p['name'])?></td>
                        <td>$<?=number_format($p['price'], 2)?></td>
                        <td><input type="number" name="qty[<?=$pid?>]" value="<?=$q?>" min="0" class="qty-input"></td>
                        <td class="subtotal">$<?=number_format($sub, 2)?></td>
                        <td><a href="?action=remove&id=<?=$pid?>" class="btn btn-danger">Remove</a></td>
                    </tr>
                <?php endforeach; ?>
                    <tr><td colspan="3"><strong>Total</strong></td><td colspan="2"><strong id="tot">$<?=number_format($tot, 2)?></strong></td></tr>
                </tbody>
            </table>
            <div class="actions">
                <button type="submit" class="btn">Update Cart</button>
                <a href="?action=clear" class="btn btn-danger" onclick="return confirm('Clear all items?')">Clear Cart</a>
            </div>
        </form>
    <?php endif; ?>
<?php else: ?>
    <h1>🛍️ Products</h1>
    <p><a href="?action=cart" class="btn">View Cart <span class="cart-badge"><?=$cnt?></span></a></p>
    <?php foreach ($prods as $id => $p): ?>
    <div class="product">
        <div><strong><?=htmlspecialchars($p['name'])?></strong><br><span>$<?=number_format($p['price'], 2)?></span></div>
        <a href="?action=add&id=<?=$id?>" class="btn">Add to Cart</a>
    </div>
    <?php endforeach; ?>
    <?php if ($cnt > 0): ?>
    <p><a href="?action=clear" class="btn btn-danger" onclick="return confirm('Clear all items?')">Clear Cart</a></p>
    <?php endif; ?>
<?php endif; ?>

<script>
document.querySelectorAll('.qty-input').forEach(i => {
    i.addEventListener('input', function() {
        let r = this.closest('tr'), pr = parseFloat(r.dataset.price), q = parseInt(this.value) || 0;
        r.querySelector('.subtotal').textContent = '$' + (pr * q).toFixed(2);
        let t = 0;
        document.querySelectorAll('tr[data-price]').forEach(x => {
            t += parseFloat(x.dataset.price) * (parseInt(x.querySelector('.qty-input').value) || 0);
        });
        document.getElementById('tot').textContent = '$' + t.toFixed(2);
    });
});
</script>
</body>
</html>