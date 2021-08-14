function homePageHandler() {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Barsukas</title>
    <link rel="stylesheet" href="./css/base/reset.css">
    <link rel="stylesheet" href="./css/base/layout.css">
    <link rel="stylesheet" href="./css/3rd-party/font-awesome.min.css">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <style>
        img {
            width: 300px;
        }
    </style>
</head>

<body>
    INDEX BARSUKAS CONTENT
    <i class="fa fa-globe"></i>
    <img src="./img/undraw_Active_support_re_b7sj.svg" alt="Paveiksliukas">
    <img src="./img/mario.png" alt="Mario">
    <img src="./img/Landscape-Color.jpg" alt="Kalnai">

    <section>
                    <h2>Services</h2>
                    <div class="services-list">
                        <div class="service">PASLAUGA 1</div>
                        <div class="service">PASLAUGA 2</div>
                        <div class="service">PASLAUGA 3</div>
                    </div>
                </section>

    <script src="./js/demo.js" type="module" defer></script>
</body>

</html>`;
}

module.exports = homePageHandler;