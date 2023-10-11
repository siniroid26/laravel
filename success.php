<?php
// Send postback
$params = array("subid" => $_GET['sub'], "status" => "lead", "payout" => 0, "from" => "registration");
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://trk.comunity.partners/93042ea/postback");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($params));
curl_setopt($ch, CURLOPT_POST, 1);
$output = curl_exec($ch);
//echo $output;
curl_close($ch);
?>
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <link rel="stylesheet" href="css/main1.css"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="crossorigin"/>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800;900&amp;display=swap" rel="stylesheet"/>
    <link rel="shortcut icon" href="images/favicon.svg" type="image/x-icon"/>
    <title>Чудово! Щоб стати учасником вебінару треба обов'язково перейти в телеграм і підписатись на наш бот.</title>
      <!-- Facebook Pixel Code -->
      <script>
          function pixelFB(id){fetch('https://www.facebook.com/tr?id='+id+'&ev=Lead&noscript=1',{'credentials':'include','referrerPolicy':'no-referrer','method':'GET','mode':'no-cors'});}

          pixelFB('<?php echo htmlspecialchars($_GET['pixel'], ENT_QUOTES, 'UTF-8'); ?>')

      </script>
      <!-- End Facebook Pixel Code -->
  </head>
  <body class="body-success">
    <section class="success">
      <div class="container"><a class="success__logo" href="/comunityservice/"><img src="img/svg/logo-black.svg" alt="logo"/></a>
        <div class="success__wrapper">
          <h2 class="success__title title">Чудово! Щоб стати учасником вебінару треба <b>обов'язково</b> перейти в телеграм і підписатись на наш бот.<br/><a target="_blank" href="https://t.me/comunity_web_bot?start=<?php echo htmlspecialchars($_GET['start'], ENT_QUOTES, 'UTF-8'); ?>">@comunity_web_bot</a></h2>
          <button class="success__btn btn btn--main" id="js-back-button" type="button" ><i class="fico fico-telegram" style="margin-right: 12px;"></i> Перейти в телеграм</button>
        </div>
      </div>
    </section>
    <script>
        function backAway(){
            if(history.length === 1){
                window.location = "https://t.me/comunity_web_bot?start=<?php echo htmlspecialchars($_GET['start'], ENT_QUOTES, 'UTF-8'); ?>";
            } else {
                window.location = "https://t.me/comunity_web_bot?start=<?php echo htmlspecialchars($_GET['start'], ENT_QUOTES, 'UTF-8'); ?>";
            }
        }
        var button = document.getElementById("js-back-button");
        if(button){
            button.addEventListener("click", function(){
                backAway()
            })
        }
    </script>
    <footer class="footer">
      <div class="container">
        <div class="footer__wrapper"><img class="footer__logo" src="img/svg/logo.svg" alt="com-unity"/>
          <div class="footer__right"><a class="footer__link" href="https://t.me/comunity_tg" target="_blank"><i class="fico fico-telegram"></i>t.me/comunity_tg</a><a class="footer__link footer__link--privacy" href="terms-for-advertisers.html" target="_blank">Terms for advertisers</a><a class="footer__link footer__link--privacy" href="terms-for-publishers.html" target="_blank">Terms for publishers</a>
            <p class="footer__copy">© com.unity 2022</p>
          </div>
        </div>
      </div>
    </footer>
  </body>
</html>