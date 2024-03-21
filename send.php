<?php

$token = "7140639067:AAFztrUwiz-EJL_0CqxSOt4xL52eELUg-sw";

//Сюда вставляем chat_id
$chat_id = "-4117816437";

//Определяем переменные для передачи данных из нашей формы
if ($_POST['act'] == 'order') {
    $name = ($_POST['name']);
    $phone = ($_POST['phone']);

//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Имя:' => $name,
        'Телефон:' => $phone
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
    // if ($sendToTelegram) {
    //     alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
    // }

//А здесь сообщение об ошибке при отправке
    // else {
    //     alert('Что-то пошло не так. ПОпробуйте отправить форму ещё раз.');
    // }
}

?>