const webhook = require("webhook-discord");

let mysql = require('../modules/mysql');
let methods = require('../modules/methods');
let user = require('../user');

let discord = exports;

discord.report = "https://discord.com/api/webhooks/1333785652831060039/LW5g41Pduyd9Z5o1rx8r4pktwqAQ85cLjxRqXAr00Oa6apdMMX5CpsAb-FiOcOBXYWzF";
discord.deadlist = "https://discord.com/api/webhooks/1333785652831060039/LW5g41Pduyd9Z5o1rx8r4pktwqAQ85cLjxRqXAr00Oa6apdMMX5CpsAb-FiOcOBXYWzF";
discord.invaderAd = "https://discord.com/api/webhooks/1333785652831060039/LW5g41Pduyd9Z5o1rx8r4pktwqAQ85cLjxRqXAr00Oa6apdMMX5CpsAb-FiOcOBXYWzF";
discord.invaderNews = "https://discord.com/api/webhooks/1333785652831060039/LW5g41Pduyd9Z5o1rx8r4pktwqAQ85cLjxRqXAr00Oa6apdMMX5CpsAb-FiOcOBXYWzF";
discord.fractionNews = "https://discord.com/api/webhooks/1333785652831060039/LW5g41Pduyd9Z5o1rx8r4pktwqAQ85cLjxRqXAr00Oa6apdMMX5CpsAb-FiOcOBXYWzF";

discord.workBcsd = "https://discord.com/api/webhooks/1333785652831060039/LW5g41Pduyd9Z5o1rx8r4pktwqAQ85cLjxRqXAr00Oa6apdMMX5CpsAb-FiOcOBXYWzF";
discord.workLspd = "https://discord.com/api/webhooks/1333785652831060039/LW5g41Pduyd9Z5o1rx8r4pktwqAQ85cLjxRqXAr00Oa6apdMMX5CpsAb-FiOcOBXYWzF";
discord.workUsmc = "https://discord.com/api/webhooks/1333785652831060039/LW5g41Pduyd9Z5o1rx8r4pktwqAQ85cLjxRqXAr00Oa6apdMMX5CpsAb-FiOcOBXYWzF";
discord.workNews = "https://discord.com/api/webhooks/1333785652831060039/LW5g41Pduyd9Z5o1rx8r4pktwqAQ85cLjxRqXAr00Oa6apdMMX5CpsAb-FiOcOBXYWzF";
discord.workEms = "https://discord.com/api/webhooks/1333785652831060039/LW5g41Pduyd9Z5o1rx8r4pktwqAQ85cLjxRqXAr00Oa6apdMMX5CpsAb-FiOcOBXYWzF";
discord.workGov = "https://discord.com/api/webhooks/1333785652831060039/LW5g41Pduyd9Z5o1rx8r4pktwqAQ85cLjxRqXAr00Oa6apdMMX5CpsAb-FiOcOBXYWzF";

discord.marketProperty = "https://discord.com/api/webhooks/1333785652831060039/LW5g41Pduyd9Z5o1rx8r4pktwqAQ85cLjxRqXAr00Oa6apdMMX5CpsAb-FiOcOBXYWzF";
discord.marketBusiness = "https://discord.com/api/webhooks/1333785652831060039/LW5g41Pduyd9Z5o1rx8r4pktwqAQ85cLjxRqXAr00Oa6apdMMX5CpsAb-FiOcOBXYWzF";
discord.marketVehicles = "https://discord.com/api/webhooks/1333785652831060039/LW5g41Pduyd9Z5o1rx8r4pktwqAQ85cLjxRqXAr00Oa6apdMMX5CpsAb-FiOcOBXYWzF";

discord.dednetImg = "https://i.imgur.com/WhubVMp.png";
discord.socialClub = "https://a.rsg.sc//n/";

discord.imgGov = "https://i.imgur.com/eFGOitl.png";
discord.imgLspd = "https://i.imgur.com/uRUp6ig.png";
discord.imgFib = "https://i.imgur.com/KaMdGAl.png";
discord.imgUsmc = "";
discord.imgSheriff = "https://i.imgur.com/sOPdklt.png";
discord.imgEms = "https://i.imgur.com/MoMutqI.png";
discord.imgInvader = "https://i.imgur.com/xxUGqJi.png";

discord.colorGov = "#795548";
discord.colorLspd = "#2196F3";
discord.colorFib = "#212121";
discord.colorUsmc = "#9E9E9E";
discord.colorSheriff = "#8BC34A";
discord.colorEms = "#f44336";
discord.colorInvader = "#FFEB3B";

discord.sendFractionList = function (title, sender, message, senderImg = discord.dednetImg, avatar = discord.imgGov, color = "#f44336") {
    const Hook = new webhook.Webhook(discord.fractionNews);

    const msg = new webhook.MessageBuilder()
        .setName('Новости Штата')
        .setTitle(sender)
        .setAvatar(avatar)
        .setDescription(message)
        .setFooter(title, senderImg)
        .setColor(color)
        .setTime();

    Hook.send(msg);
};

discord.sendDeadList = function (target, desc, reason, sender = 'Server', senderImg = discord.dednetImg, color = "#f44336") {
    const Hook = new webhook.Webhook(discord.deadlist);

    const msg = new webhook.MessageBuilder()
        .setName("DEAD LIST")
        .setTitle(target)
        .addField("Описание", desc)
        .addField("Причина", reason)
        .setFooter(sender, senderImg)
        .setColor(color)
        .setTime();

    Hook.send(msg);
};

discord.sendAd = function (title, name, text, phone, editor, editorImg) {
    const Hook = new webhook.Webhook(discord.invaderAd);

    let color = "#607D8B";
    if (title === 'Покупка')
        color = "#03A9F4";
    if (title === 'Продажа')
        color = "#8BC34A";
    if (title === 'Услуга')
        color = "#FFEB3B";

    const msg = new webhook.MessageBuilder()
        .setName('Рекламное объявление')
        .setTitle(title)
        .setAvatar(discord.imgInvader)
        .addField(`Phone Number`, `\`\`\`${phone}\`\`\``, true)
        .addField(`Customer`, `\`\`\`${name}\`\`\``, true)
        .setDescription(`\`\`\`fix\n${text}\`\`\``)
        .setFooter(editor, 'https://a.rsg.sc//n/' + editorImg.toLowerCase())
        .setColor(color)
        .setTime();

    Hook.send(msg);
};

discord.sendNews = function (title, text, editor, editorImg) {
    const Hook = new webhook.Webhook(discord.invaderNews);
    const msg = new webhook.MessageBuilder()
        .setName('Новости')
        .setTitle(title)
        .setDescription(text)
        .setFooter(editor, 'https://a.rsg.sc//n/' + editorImg)
        .setColor("#f44336")
        .setTime();

    Hook.send(msg);
};

discord.sendWork = function (url, player, dscrd, text) {

    if (!user.isLogin(player))
        return;

    let history = '';
    let sender = `${user.getRpName(player)} (${user.getId(player)})`;
    let phone = methods.phoneFormat(user.get(player, 'phone'));
    let senderImg = player.socialClub;

    mysql.executeQuery(`SELECT * FROM log_player WHERE user_id = ${user.getId(player)} AND type = 1 ORDER BY id DESC LIMIT 5`, (err, rows, fields) => {
        if (rows.length > 0) {
            try {
                rows.forEach(row => {
                    history += `${methods.unixTimeStampToDateTimeShort(row['timestamp'])} | ${row['do']}\n`;
                });
            }
            catch (e) {
                methods.debug(e);
            }
        }

        if (history === '')
            history = 'Криминальной истории - нет';

        const Hook = new webhook.Webhook(url);
        const msg = new webhook.MessageBuilder()
            .setName('Заявление')
            .setTitle(sender)
            .setDescription(text)
            .addField(`Телефон`, `\`\`\`${phone}\`\`\``, true)
            .addField(`Дискорд`, `\`\`\`${dscrd}\`\`\``, true)
            .addField(`Work ID`, `\`\`\`${user.get(player, 'work_lvl')} / ${user.get(player, 'work_exp')}\`\`\``, true)
            .addField(`История`, `\`\`\`${history}\`\`\``)
            .setFooter(sender, 'https://a.rsg.sc//n/' + senderImg)
            .setColor("#f44336")
            .setTime();

        Hook.send(msg);
    });
};

discord.sendMarketProperty = function (title, text) {
    const Hook = new webhook.Webhook(discord.marketProperty);
    const msg = new webhook.MessageBuilder()
        .setName('Новости имущества')
        .setTitle(title)
        .setDescription(`\`\`\`ml\n${text}\`\`\``)
        .setFooter('Правительство', discord.imgGov)
        .setColor("#f44336")
        .setTime();
    Hook.send(msg);
};

discord.sendMarketBusiness = function (title, text) {
    const Hook = new webhook.Webhook(discord.marketBusiness);
    const msg = new webhook.MessageBuilder()
        .setName('Новости бизнеса')
        .setTitle(title)
        .setDescription(`\`\`\`ml\n${text}\`\`\``)
        .setFooter('Правительство', discord.imgGov)
        .setColor("#f44336")
        .setTime();
    Hook.send(msg);
};

discord.sendMarketVehicles = function (title, text, imgUrl) {
    const Hook = new webhook.Webhook(discord.marketVehicles);
    const msg = new webhook.MessageBuilder()
        .setName('Новости транспорта')
        .setTitle(title)
        .setDescription(`\`\`\`ml\n${text}\`\`\``)
        .setImage(imgUrl)
        .setFooter('Правительство', discord.imgGov)
        .setColor("#f44336")
        .setTime();
    Hook.send(msg);
};