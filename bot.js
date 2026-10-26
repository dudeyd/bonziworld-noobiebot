let thisbot = io("//");
let botSees = new Map;
let roomData = {};
const thewhys = [
            `WHY WHY WHY WHY WHY`,
            `YOU GET NERVOUS MAN`,
            `WHYWHYWHYHYHYHYHYHHYHYHYHYH`,
        ];
let cannotAskNoobie = false;
let roomid = null;
let outfits = [];
let socketNotListeningToBotRoom = false
let botCannotAsshole = true;
let hostID = me;
let quotes = []
let botGUID = null;
let lockcmd = false;
let msg = null;
let showErrorInChat = false;
let askCommandDisabled = false;
let botUser = null;
const startTime = Date.now();
const prefix = "n*";
// le word filter
const WORD_FILTER = {
    enabled: true,
    words: ["nig[[3]]", "nighr", "nigher", "nigha", "nigger", "nigga", "i rape", "i raype", "klonoa crying", "klona crying", "fag", "faggot", "tard"],
    replacement: "You're grounded."
};
function replaceFilteredWords(text) {
    if (!WORD_FILTER.enabled || typeof text !== 'string') {
        return text;
    }

    let cleanText = text.replace(/\$[a-z0-9]+\$/gi, "");

    cleanText = cleanText.replace(/[\u200B-\u200D\uFEFF\u0000-\u001F\u007F-\u009F]/g, "");
    
    const leetMap = {
        'π': 'n', 'ñ': 'n', 'ń': 'n', 
        '1': 'i', '!': 'i', '|': 'i', '¡': 'i', 'y': 'i', 'í': 'i', 'ì': 'i', 'ī': 'i', 'î': 'i', 'į': 'i', 'ï': 'i',
        '3': 'e', '€': 'e', '£': 'e', 'ê': 'e', 'ė': 'e', 'é': 'e', 'ē': 'e', 'ë': 'e', 'è': 'e', 'ę': 'e',
        '4': 'a', '@': 'a', 'λ': 'a', 'à': 'a', 'á': 'a', 'ã': 'a', 'å': 'a', 'â': 'a', 'ā': 'a', 'ä': 'a', 'ą': 'a', 'ª': 'a',
        '0': 'o', 'ø': 'o', 'ó': 'o', 'ô': 'o', 'ō': 'o', 'ö': 'o', 'õ': 'o', 'ò': 'o',
        '5': 's', '$': 's', '§': 's', 'ß': 's',
        '7': 't', '+': 't',
        '8': 'b',
        '9': 'g'
    };
    cleanText = cleanText.toLowerCase().split('').map(char => leetMap[char] || char).join('');

    cleanText = cleanText.replace(/[^a-z0-9]/g, "");

    for (const word of WORD_FILTER.words) {
        if (!word) continue;
        
        const targetWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");

        if (cleanText.includes(targetWord)) {
            // Intercept the message payload entirely
            return WORD_FILTER.replacement;
        }
    }

    return text;
}
const botname = "NoobieBot";
const lockcommand = true
const creator = "Noobie80";
let isPremium = false;
const startupSound = new Audio('https://files.catbox.moe/wqek9l.mp3'); //unused
function botBlessedAvatar(){botcmd("color green");botcmd("hat headphones dank scarf")}
function loadScript(SRC) {const script = document.createElement('script');script.src = SRC;script.async = true;document.body.appendChild(script);}
const help = `- ^^%%$r$${botname} Commands 1/2$r$%%^^ \n` +
`**${prefix}links\\n ${prefix}echo (message)\\n ${prefix}joke\\n ${prefix}bonzipasta\\n ${prefix}fact\\n ${prefix}hat (hat)\\n ${prefix}color (color)\\n --${prefix}name (name)--\\n ${prefix}restore\\n --${prefix}ship (name1) and (name2)--\\n --${prefix}roast (name)--\\n ${prefix}aplle\\n ${prefix}llama\\n ${prefix}parrot\\n ${prefix}source\\n ${prefix}changelog\\n ${prefix}france\\n ${prefix}asshole\\n ${prefix}noob**`;

const help2 = `- ^^%%$r$${botname} Commands 2/2$r$%%^^ \\n` +
`**--${prefix}stupidbitch (name)--\\n ${prefix}gibberish\\n ${prefix}stfu (name)\\n ${prefix}fuk (name)\\n ${prefix}asknoobie (question)\\n ${prefix}myinfo\\n ${prefix}uptime\\n ${prefix}hostinfo\\n${prefix}why\\n ${prefix}randomquote`;
/*const nukelines = [
            `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`,
            `I JUST DID A BOOM BOOM!`,
            `Goodbye everyone! I'm going to the purple void!`,
            `Weeeeeeeeeeeeeeeeeee`,
        ]; unused*/
        /*const nukeline = nukelines[Math.floor(Math.random() * nukelines.length)];*/
const otherUserNukes = [
            "KaBLAM! There goes that bonzi",
            "KaBOOM! That bonzi did a boom boom!",
            "[[kabum]]",
            "[[kabum]]! That bonzi did a [[bum bum]]"
        ];

function sendMsg(msg) {
    setTimeout(() => {
        thisbot.emit("talk", { text: replaceFilteredWords(msg.replaceAll(prefix, "prefix!")).replaceAll("prefix!", "prefix") });
    }, 200);
}
function botcmd(str) {
	let [command, ...args] = str.split(" ");
    thisbot.emit("command", {
		command,
		args: args.join(" "),
	});
}
thisbot.on("updateAll", (data) => {
	botSees.clear();
	for (let [id, user] of entries(data.usersPublic)) {
		botSees.set(id, user);
	}
});
setTimeout(() => { socket.emit("command", { list: ["color", "green"] }); }, 1000);
setTimeout(() => { socket.emit("command", { list: ["hat", "headphones"] }); }, 1000);
function botreply(reply, user, usertext) {thisbot.emit("talk", {
                        text: reply,
                        quote: {
                            name: user,
                            text: usertext,
                        },
                    })
}

function useBot(text) {
    if (text === prefix + "template") {/*placeholder*/}
    if (text === prefix + "test") {sendMsg("noobiebot is responding")}
    if (text === prefix + "update") {
		if(botUser !== hostID) return
		thisbot.destroy();							}
    if (text === prefix + "links") {sendMsg("-dudeyd.github.io/bonziworld-noobiebot/links/")}
	if (text === prefix + "disableorenable") {if(botUser === hostID){lockcmd = !lockcmd}}
    if (text === prefix + "help 1") return sendMsg(help);
    if (text === prefix + "help") return sendMsg(`-%%^^$r$${botname} Help Command Pages$r$^^%% ${prefix}help 1\\n ${prefix}help 2`);
    if (text === prefix + "help 2") return sendMsg(help2);
    if (text === prefix + "joke") return botcmd(`joke`);
    if (text === prefix + "/j") return botcmd(`joke`);
    if (text === prefix + "bonzipasta") return botcmd(`triggered`);
    if (text === prefix + "fact") return botcmd(`fact`);
    if (text.startsWith(prefix + "why")) return sendMsg(thewhys[Math.floor(Math.random() * thewhys.length)]);
    if (text === prefix + "france") return botcmd(`france`);
    if (text.startsWith(prefix + "hat")) return botcmd(`hat ${text.substring(prefix.length + 4)}`);
    if (text.startsWith(prefix + "color")) return botcmd(`color ${text.substring(prefix.length + 6)}`);
    if (text.startsWith(prefix + "stupidbitch")) return sendMsg(`disabled`);
    if (text.startsWith(prefix + "resetname")) return botcmd(`name ${botname}`);
    if (text.startsWith(prefix + "resetcolor")) return botcmd(`color green`);
    if (text.startsWith(prefix + "resethat")) return botcmd(`hat headphones`);
   if (text === prefix + "restore") {
        botcmd(`color green`);
        botcmd(`hat headphones${botSees.get(botGUID).runlevel > 0 ? " dank scarf" : ""}`);
        botcmd(`name ${botname} (${prefix}help)`);
    }

    if (text.startsWith(prefix + "roast")) {
        const user = text.substring(prefix.length + 6);
        if (!user) return sendMsg(" ");
        const roasts = [
            `${user}, I'd agree with you, but then we'd both be wrong.`,
            `${user}, if laughter is the best medicine, your face must cure the world.`,
            `${user}, you bring everyone so much joy... when you leave the room.`,
            `${user}, you're proof evolution can go in reverse.`,
            `${user}, if I wanted to kill myself, I'd climb your ego and jump to your IQ.`
        ];
        const roast = roasts[Math.floor(Math.random() * roasts.length)];
        return sendMsg(`disabled`);
    }
    if (text.startsWith(prefix + "randomquote")) {
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        if (quote.text.startsWith("-said in")) return useBot(`${prefix}randomquote`);botreply(`-said in ${quote.time}`, !usersPublic.get(quote.guid).name ? "Unknown Gorilla" : usersPublic.get(quote.guid).name, quote.text);
if (!usersPublic.get(quote.guid).name) return useBot(`${prefix}randomquote`);
    }
    if (text.startsWith(prefix + "ship")) {
        const users = text.substring(prefix.length + 5).split(" and ");
        if (users.length !== 2) return sendMsg(" ");
        const percent = Math.floor(Math.random() * 101);
        return sendMsg(`disabled`);
    }

        if (text === prefix + "aplle") {
        return sendMsg("aplle. aplle pie. aplle bottle. aplle everything.");
    }
    if (text === prefix + "llama") {
        botcmd(`img https://files.catbox.moe/qkbzrk.jpeg`);
    }
    if (text === prefix + "source") {
        sendMsg(`-moved to ${prefix}links`);
    }
    if (text === prefix + "parrot") {
        botcmd(`img https://files.catbox.moe/9xklj5.jpeg`);
    }
    if (text === prefix + "cow") {
        botcmd(`image https://files.catbox.moe/91ab4p.jpeg`);
    }
if (text === prefix + "camel") {
        botcmd(`image https://files.catbox.moe/yesz9i.png`);
    }
    if (text === prefix + "noob") {
        sendMsg(`[insert noob spinning gif]`);
    }
    if (text === prefix + "changelog") {
        /*cmd deleted*/
    }
    if (text === prefix + "github") {
      sendMsg("-github.com/dudeyd/bonziworld-noobiebot");
    }
    /*if (text.startsWith(prefix + "gokid")) {
    if (lockcmd === true) {
            sendMsg("disabled")
        }
        if (lockcmd === false) {
            const userxd = text.substring(prefix.length + 6);
    const gokids = [
            `${userxd}, your a gokid!`,
            `Hey, ${userxd}! You're a fucking gokid!`
        ];
        const gokid = gokids[Math.floor(Math.random() * gokids.length)];
        return sendMsg(gokid);
        }
    }*/
    if (text.startsWith(prefix + "pp")) {
    const name = text.substring(prefix.length + 2);
    const pps = [
            `This is ${name}'s PP: 8=Đ`,
            `This is ${name}'s PP: 8==Đ`,
            `This is ${name}'s PP: 8===Đ`,
            `This is ${name}'s PP: 8====Đ`,
            `This is ${name}'s PP: 8=====Đ`,
            `This is ${name}'s PP: 8======Đ`
        ];
        const pp = pps[Math.floor(Math.random() * pps.length)];
        return sendMsg("disabled");
     }
if (text.startsWith(prefix + "asknoobie")) {
        if (cannotAskNoobie === true) {
            sendMsg("")
        }
        if (cannotAskNoobie === false) {
            const userAskingYou = botUser;
            thisbot.emit("typing", 1);
            sendMsg("-waiting for noobie/bot host");
setTimeout(() => {
            const que = text.substring(prefix.length + 10);
            const ans = prompt(`${botSees.get(userAskingYou).name}: ${que}`);
            botreply(ans, botSees.get(userAskingYou).name, que);
            thisbot.emit("typing", 0);
}, 1000);
        }
    }
if (text.startsWith(prefix + "say")) {
        if (lockcmd === false) {
        sendMsg(text.substring(prefix.length + 4));    
        }
        if (lockcmd !== false) {
        sendMsg("disabled");    
        }
    }
if (text.startsWith(prefix + "room")) {
        if (botUser === me) {
        setTimeout(() => {
        thisbot.disconnect();
        socket.disconnect();
        }, 200);    
        joined = false;
        setTimeout(() => {
        socket.connect();
        thisbot.connect();
        thisbot.emit("login", {name: `${botname} (${prefix}help)`,room: text.substring(prefix.length + 5),});
socket.emit("login", {name: login_name.value,room: text.substring(prefix.length + 5),});
}, 400);
        }
        if (botUser !== me) {
        sendMsg("host only");    
        }
    }
	
if (text.startsWith(prefix + "echo")) {
        if (lockcmd === false) {
        sendMsg(text.substring(prefix.length + 4));    
        }
        if (lockcmd !== false) {
        sendMsg("disabled");    
        }
    }
if (text.startsWith(prefix + "asshole")) {
        if (botCannotAsshole === true) {
            sendMsg("disabled")
        }
        if (botCannotAsshole === false) {
            botcmd(`asshole ${text.substring(prefix.length + 7)}`);
        }
    }
if (text.startsWith(prefix + "myinfo")) {
        sendMsg(`**^^Your info^^**\\n**ID:** ${botUser}\\n**APPEARANCE: **${botSees.get(botUser)?.color} gorilla\\n**PITCH: **${botSees.get(botUser)?.pitch}\\n**SPEED: **${botSees.get(botUser)?.speed}`);
}
if (text.startsWith(prefix + "hostinfo")) {
        sendMsg(`**^^Host info^^**\\n**Host ID:** ${!me || me || "none"}\\n**Name: **${!me || botSees.get(me).name || login_name.value}`);
    }
if (text.startsWith(prefix + "cr6")) {
        sendMsg("^^**cr6**^^");
    }
if (text.startsWith(prefix + "gibberish")) {
        const gibberishlang = ["[[_^_cmn]]", "[[_^_vi]]", "[[_^_en]]", "[[_^_es]]", "[[_^_fr]]", "[[_^_de]]", "[[_^_it]]", "[[_^_pt]]", "[[_^_ru]]", "[[_^_ja]]", "[[_^_ko]]", "[[_^_zh]]", "[["];
const gibberishmessage = ["h@x du da de d3!", "tygtyty@", "@plle p0i", "sal@d@", "Hs @e", "p03 ere mu", "ooer nooer", "i?", "r0RRRR", "b0303er n030303r"];
        sendMsg(gibberishlang[Math.floor(Math.random() * gibberishlang.length)] + " " + gibberishmessage[Math.floor(Math.random() * gibberishmessage.length)]);
    }
    if (text.startsWith(prefix + "stfu")) {
     if (lockcmd === true) {
     sendMsg("")
     } else{
    const userxd2 = text.substring(prefix.length + 4).trim();
    if (!userxd2) return botReply("type a name first", usersPublic(botUser).name, text);
    const stfus = [
            `${userxd2} shut the fuck up, NOW!`,
            `${userxd2} shut the fuck up, because I'm tired of your bullshit`
        ];
        const stfu = stfus[Math.floor(Math.random() * stfus.length)];
        return sendMsg(stfu); }
    }
    if (text.startsWith(prefix + "fuk")) {
        if (lockcmd === true) {
            sendMsg("disabled")
        }
        if (lockcmd === false) {
            const thingxd = text.substring(prefix.length + 3).trim();
    setTimeout(function(){
        sendMsg(`Guess The ${thingxd}`);
    }, 200);
    setTimeout(function(){
        sendMsg("correct");
    }, 2000);
    setTimeout(function(){
        sendMsg("IT'S A FUCKING [[fVk]]");
    }, 4000);
        }
 }
if (text === prefix + "pollwhy") {
                botcmd("advpoll WHY WHY WHY WHY WHY;YOU GET NERVOUS MAN;WHYWHYWHYHYHYHYHYHHYHYHYHYH");
}
if (text.startsWith(prefix + "ack")) {
    /* if (lockcmd === true) { */
            sendMsg("disabled")
        /* } */
        /*if (lockcmd === false) {
            setTimeout(function(){
        sendMsg(`>${text.substring(prefix.length + 3).trim()}`);
    }, 200); 
    setTimeout(function(){
        sendMsg("ACK!");
    }, 2000);
        } */ //No, Just no.
}
if (text === prefix + "uptime") {
    const seconds = Math.floor((Date.now() - startTime) / 1000);

    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    return sendMsg(
        `Bot Uptime:\n${hours}h ${minutes % 60}m ${seconds % 60}s`
    );

			}

}
thisbot.on("talk", (message) => {
    botUser = message.guid;
    msg = message.text.replaceAll("{NAME}", "USER");
    useBot(msg);
});
function lockAskCreator() {
  cannotAskNoobie = true;
  sendMsg(`-n*asknoobie has been disabled by the creator`);
}
function unlockAskCreator() {
  cannotAskNoobie = false;
  speak.play(`-n*asknoobie has been enabled by the creator`);
}
thisbot.on("loginFail", (data) => {
speak.play(`Failed to load NoobieBot: ${data.reason}`);
});
thisbot.on("update", (data) => {
	botSees.set(data.guid, data.userPublic);
});
thisbot.on("leave", (data) => {
if (data.guid === hostID) {
lockcmd = true;
sendMsg(`Host has surfed away. ${botname} is staying here.`);
socketNotListeningToBotRoom = true
}
});
thisbot.on("kick", (data) => {
speak.play(`NoobieBot got kicked:${data.reason}`);
});
socket.on("talk", (data) => {
quotes.push({"guid": data.guid, "text": data.text, "time": Date(Date.now()).toString()});
});
thisbot.on("disconnect", () => {
speak.play("NoobieBot disconnected");
});
thisbot.on("connect", (data) => {thisbot.emit("login", {name: `${botname} (${prefix}help)`,room: login_room.value,})})
socket.on("room", (data) => {hostID = data.you;socketNotListeningToBotRoom = false;});
thisbot.on("blessed", botBlessedAvatar);
thisbot.on("room", (data) => {
try{
/*new Audio('https://github.com/MCPlayer2015/all-windows-sounds/raw/refs/heads/main/(2001)%20Windows%20XP/Windows%20XP%20Logon%20Sound.wav').play();*/
joined = true;
botGUID = data.you;
botcmd("swag");
setTimeout(() => {useBot(`${prefix}restore`)}, 750);
roomid = data.room;
} catch(error) { Dialog.alert(`${error}`) }
});
setInterval(() => {
        thisbot.emit("typing", 1);
    }, 60000);
setInterval(() => {
        thisbot.emit("typing", 0);
    }, 60002);
