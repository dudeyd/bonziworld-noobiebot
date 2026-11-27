const prefix = "-n,";
const botname = "NoobieBot (-n,help)";
const version = "V1.0.7";
let isPremium = false;
socket.emit("login", {
        name: botname,
        room: login_room.value,
    });
setup();

const help = `- ^^%%$r$NOOBIEBOT COMMANDS$r$%%^^ \\n` +
`**${prefix}help\\n ${prefix}extracmds\\n ${prefix}echo {args}\\n ${prefix}joke\\n ${prefix}bonzipasta\\n ${prefix}fact\\n ${prefix}hat {args}\\n ${prefix}color {args}\\n ${prefix}name {args}\\n ${prefix}resethat\\n ${prefix}resetcolor\\n ${prefix}resetname\\n ${prefix}roast {args}\\n ${prefix}aplle\\n ${prefix}llama\\n ${prefix}parrot\\n ${prefix}source\\n ${prefix}changelog\\n ${prefix}france\\n ${prefix}asshole\\n ${prefix}noob**`;

const help2 = `- ^^%%$r$EXTRA COMMANDS$r$%%^^ \\n` +
`none`;

function sendMsg(msg) {
    setTimeout(() => {
        socket.emit("talk", { text: msg });
    }, 200);
}

setTimeout(() => { socket.emit("command", { list: ["color", "gray"] }); }, 1000);
setTimeout(() => { socket.emit("command", { list: ["hat", "pot"] }); }, 1000);
setTimeout(() => { sendMsg(`Legacy NoobieBot Is Here. Type -n,help To See Commands. Created By Noobie80.\\n(notice: some commands wont work since this version was made before .gay refactored its entire server code)`); }, 1000);
setInterval(() => {
        socket.emit("typing", 1);
    }, 60000);
setInterval(() => {
        socket.emit("typing", 0);
    }, 60002);/*
setInterval(() => {
        sendMsg(`BaconBot Is Still Here. Type -n,help To See Commands. Created By Noobie80.`)
    }, 60003);*/

socket.on("talk", (message) => {
    const text = message.text;

    if (text === prefix + "help") return sendMsg(help);
    if (text === prefix + "extracmds") return sendMsg(help2);
    if (text.startsWith(prefix + "echo")) return sendMsg(text.substring(prefix.length + 5));
    if (text.startsWith(prefix + "say")) return sendMsg(text.substring(prefix.length + 4));
    if (text === prefix + "joke") return socket.emit("command", { list: ["joke"] });
    if (text === prefix + "bonzipasta") return socket.emit("command", { list: ["triggered"] });
    if (text === prefix + "fact") return socket.emit("command", { list: ["fact"] });
    if (text === prefix + "france") return socket.emit("command", { list: ["france"] });
    if (text.startsWith(prefix + "hat")) return socket.emit("command", { list: ["hat", text.substring(prefix.length + 4)] });
    if (text.startsWith(prefix + "color")) return socket.emit("command", { list: ["color", text.substring(prefix.length + 6)] });
    if (text.startsWith(prefix + "name")) return socket.emit("command", { list: ["name", text.substring(prefix.length + 5)] });
    if (text.startsWith(prefix + "asshole")) return socket.emit("command", { list: ["asshole", text.substring(prefix.length + 7)] });
    if (text.startsWith(prefix + "resetname")) return socket.emit("command", { list: ["name", botname] });
    if (text.startsWith(prefix + "resetcolor")) return socket.emit("command", { list: ["color", "green"] });
    if (text.startsWith(prefix + "resethat")) return socket.emit("command", { list: ["hat", "headphones"] });

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
        return sendMsg(roast);
    }
/*
    if (text.startsWith(prefix + "ship")) {
        const users = text.substring(prefix.length + 5).split(" and ");
        if (users.length !== 2) return sendMsg(" ");
        const percent = Math.floor(Math.random() * 101);
        return sendMsg(`${users[0]} ❤️ ${users[1]} = ${percent}% Love!`);
    }
*/
        if (text === prefix + "aplle") {
        return sendMsg("ew, apple,\\n yay, aplle");
    }
    if (text === prefix + "llama") {
        return sendMsg("- ^^**U GOT THE LLAMA**^^");
    }
    if (text === prefix + "source") {
        return sendMsg("- ^^**NoobieBot Source Code:**^^ \n https://file.garden/afT70JSNBTQ_DR1k/bot.js");
    }
    if (text === prefix + "parrot") {
        return sendMsg("- ^^**U GOT THE PARROT**^^");
    }
    if (text === prefix + "cow") {
        return sendMsg("- ^^**U GOT THE COW**^^");
    }
    if (text === prefix + "noob") {
        return sendMsg("- ^^**https://static.wikia.nocookie.net/roblox/images/3/3b/NOOB%21.png/**^^");
    }
    if (text === prefix + "changelog") {
        return sendMsg("- https://file.garden/afT70JSNBTQ_DR1k/changelog.txt");
    }/*
    if (text.startsWith(prefix + "gokid")) {
    const userxd = text.substring(prefix.length + 6);
    const gokids = [
            `${userxd}, your a gokid!`,
            `Hey, ${userxd}! You're a fucking gokid!`
        ];
        const gokid = gokids[Math.floor(Math.random() * gokids.length)];
        return sendMsg(gokid);
    }*/
    /*if (text.startsWith(prefix + "pp")) {
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
        return sendMsg(pp);
    }*/
});
