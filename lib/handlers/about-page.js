function aboutPageHandler() {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About | Barsukas</title>
    <link rel="stylesheet" href="./css/base/reset.css">
    <link rel="stylesheet" href="./css/base/layout.css">
    <link rel="stylesheet" href="./css/components/form.css">
</head>

<body>
    ABOUT BARSUKAS PROJECT
    <form>
        <input type="text" placeholder="Message">
        <button type="submit">Click me</button>
    </form>
</body>

</html>`;
}

module.exports = aboutPageHandler;