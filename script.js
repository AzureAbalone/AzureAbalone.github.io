window.addEventListener(
	"load",
	function () {
		const currentTime = new Date();
		const hours = currentTime.getHours();
		const db1 = document.getElementById("db1");
		const db2 = document.getElementById("db2");
		const mm1 = document.getElementById("mm1");
		const mm2 = document.getElementById("mm2");
		const bl1 = document.getElementById("bl1");
		const bl2 = document.getElementById("bl2");
		const w1s1 = document.getElementById("w1s1");
		const w1s2 = document.getElementById("w1s2");
		const w1s3 = document.getElementById("w1s3");
		const w1s4 = document.getElementById("w1s4");
		const w1s5 = document.getElementById("w1s5");
		const ml = document.getElementById("ml");
		const md = document.getElementById("md");
		const bb1 = document.getElementById("bb1");
		const bb2 = document.getElementById("bb2");
		if (hours >= 0 && hours <= 21) {
			w1s1.disabled = false;
			w1s1.style.backgroundColor = "rgb(237, 28, 36)";
			w1s1.style.cursor = "pointer";
			w1s2.disabled = false;
			w1s2.style.backgroundColor = "rgb(237, 28, 36)";
			w1s2.style.cursor = "pointer";
			w1s3.disabled = false;
			w1s3.style.backgroundColor = "rgb(237, 28, 36)	";
			w1s3.style.cursor = "pointer";
			w1s4.disabled = false;
			w1s4.style.backgroundColor = "rgb(237, 28, 36)	";
			w1s4.style.cursor = "pointer";
			w1s5.disabled = false;
			w1s5.style.backgroundColor = "rgb(237, 28, 36)	";
			w1s5.style.cursor = "pointer";
			if (hours >= 0 && hours <= 19) {
				db1.disabled = false;
				db1.style.backgroundColor = "#25aae1";
				db1.style.cursor = "pointer";
				mm1.disabled = false;
				mm1.style.cursor = "pointer";
				mm1.style.backgroundColor = "rgb(237, 28, 36)";
				bl1.disabled = false;
				bl1.style.backgroundColor = "#f5510b";
				bl1.style.cursor = "pointer";
				ml.disabled = false;
				ml.style.backgroundColor = "rgb(196, 11, 17)";
				ml.style.cursor = "pointer";
				db2.disabled = false;
				db2.style.backgroundColor = "#25aae1";
				db2.style.cursor = "pointer";
				mm2.disabled = false;
				mm2.style.cursor = "pointer";
				mm2.style.backgroundColor = "rgb(237, 28, 36)";
				bl2.disabled = false;
				bl2.style.backgroundColor = "#f5510b";
				bl2.style.cursor = "pointer";
				md.disabled = false;
				md.style.backgroundColor = "green";
				md.style.cursor = "pointer";
				if (hours >= 0 && hours <= 4) {
					bb1.disabled = false;
					bb1.style.backgroundColor = "";
					bb1.style.cursor = "pointer";
					bb2.disabled = false;
					bb2.style.backgroundColor = "";
					bb2.style.cursor = "pointer";
				} else {
				}
			} else {
			}
		} else {
		}
	},
	false
);
const direct_blitly_1_sites = [
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/hOKir4Y4w7",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/vo0R3OElHd",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/N9kEDCOAsS",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/C6WpDZpNtC",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/5j2qHNnXgQ",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/UfmT6lfj6y",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/fdpPYCdTfz",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/OIzISWs8So",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/fpxeqQ9051",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/0P6DakPOSM",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/irHu4pv6fs",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/3hIyo7IOaJ",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/B2Mtim4czJ",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/xA16zZMSuR",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/6CZpNj6NRL",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/9QT1SJ18SW",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/9GOvn5t0z0",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/qRck0waA9p",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/k11Q8nfiZE",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/JZ26JYp9pO",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/uYA9ta6L1Y",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/jOFPPWABOF",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/va5odXsHsu",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/qoI8gFq0GM",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/nmSK29LMVV",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/ePNOEIJwWO",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/QzgjM2xxY2",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/ThUfU2JVqE",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/7UQbtANUeM",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/CuWKFwD9NF",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/hz8zvePoJD",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/Tk1a3HkdcD",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/Rnpj4Q0ioW",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/89W28J9jfV",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/Ju5dA1Kmar",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/6MwMUviiso",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/NDoTT93MV9",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/ruWbJB7KcX",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/W8a6DsleaC",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/386XufQiYL",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/8Km4nbaFCs",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/vE3ozIWDMN",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/rtIk1bBYop",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/XRg1Ua0vgi",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/p0NqwDU8pj",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/HrRoLEaG0F",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/jjH1W6PwSx",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/C1QRJisJvl",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/qpaHMW4TOI",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/IizNHqlk2l",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/JPLDgIgkM2",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/eB29NtZ36p",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/MjZgJMsJvt",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/P70CkFSGgr",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/nY9DaRhosL",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/G4nNOhnknD",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/dL92dhqGeZ",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/wb96vrnRgn",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/eJ5UAK2hUb",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/GkmulNalcx",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/AttFYdvXeg",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/7dH8cBWjZp",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/qX9FWjqddn",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/NeJa6kKCDT",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/v6EMqZatrB",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/e1hqQpZYdF",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/4Vdmxbzg5E",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/WHncrYv9vY",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/PcHG6GiYDV",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/egUBa3JdML",
];
const direct_blitly_2_sites = [
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/Xa9KKmpWFy",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/XogCawdFP1",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/lB9YNZcov5",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/vKtMQ17EX1",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/OEYTKl7kgm",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/RC3sYWEARp",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/1FA7j3oZUO",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/oVGHL9n93n",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/1SOHNJvUft",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/48TDZiNRSZ",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/jHT9Prj4m6",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/Ey582eUyqs",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/M8ZvOvj7BM",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/SD3jo9wTH5",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/qLaOEtJizw",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/i5w8ezGKnW",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/uHWJw3Pnsw",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/x8ATDGpIF7",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/TfjADfIoUm",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/hJQaSbsQ17",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/71QdAdfqDS",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/f1Vz56AFLB",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/a9LijZBjZZ",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/gqlbRJj9AR",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/pVWdJ9c6Q0",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/WsIBvd5OQz",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/a1dfBDzWlt",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/w5Mx5ft52f",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/MTdE0u01Xq",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/NfpN8e9PkX",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/iQZdEgxV77",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/rio8kL9tTw",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/ESTbEi9Qb9",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/oN9BAz8sH9",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/jZPFkZtq8w",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/bNUnYmJOKB",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/gq9jvFUAyh",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/fUMMDL7n7u",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/Bl5BtF2yCE",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/nFesMbyrCD",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/N3Mnr7tFxt",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/0X6uuzShCt",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/YqQcTzzHZe",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/dI8gVchGl8",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/nWyhyebHxY",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/5t9ojyFxr2",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/x5AYTHIKx3",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/bvwYJMe5MX",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/cSyoxgy5kc",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/9Q05tR16oD",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/fnQVLk2bJu",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/YNAOBAXsDU",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/3ZDp5ZLpZu",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/OxO7CvIJBP",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/tWljmxb9WY",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/IKAYBclfTW",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/G3qg2tLR9x",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/OKDQ9qGWEC",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/jWOwulSKLa",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/oP8WTsdQfn",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/FKgXaSkxHV",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/CJ2BWDxJuy",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/DunM0w4yw5",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/a2WrG6lC5G",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/khoU48xvfw",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/cenFAS2SA9",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/A3UGOpO138",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/IahVRyPGkb",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/T7riwU2HqK",
	"https://direct.blitly.io/st?apikey=0442c51ef5b242518f997712ab75cfd4&url=https://xemnote.com/note/Wfe5iR0RsE",
];
const blitly_1_sites = [
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/IznsJlG3ud",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/SesVbsiLVe",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/4Ihow4D8j7",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/KG4Ea0XBaD",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/opp3WwYpX9",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/8YhN5cqZz0",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/Kh79ndsS1R",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/tdLvIeWF3p",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/770zndcnqP",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/7WQCtfFE49",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/5KMCw3vImp",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/MMxhJAAI8s",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/E4mXFiIOqo",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/KPx4YfJXkL",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/nyWkWbw043",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/YU2gpWOJ5F",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/eZyHOf3aZ9",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/WJ8AsEaqca",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/bckcxCS0iY",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/Eoq2gsS2KN",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/KmRPnHdPif",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/TT44AoLLLA",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/vfT6rv2ZUb",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/4zhM58iNWe",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/R1sOw7Piyl",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/uLMfCSlkYy",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/2FffRIrxUJ",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/b4F50i9MEN",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/bz7vfoqzNj",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/g4MWx5WSPF",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/UNuycqARb9",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/2ISjBvJgVZ",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/mE9X8XIXfU",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/BQcU5sIkFO",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/I1lgGCSiml",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/N8P6YTlUOY",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/3flI1K9D6Q",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/XUqfOGzbgI",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/qA6OkWrOUh",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/rwqIvMXVnk",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/255b02798l",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/mhcNmcPanl",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/lxZEvv1PoT",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/2jPxBIT9vu",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/ABhI93OvLW",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/5QSEQmspO7",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/h8uHrY7MvJ",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/CHtfkplpYk",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/HSb73hWsBF",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/xRQhQVO2MV",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/jZ2c29iI3P",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/QmjvRkHuDV",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/ZXx0cFOFEu",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/ZjQtvpBWuG",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/acThNBFVUk",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/z91787vCmR",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/4tmhMIVtYh",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/NgiAp83xFn",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/UFlNi6BUHz",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/2yHtzLPnZT",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/mS9MfriUbY",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/f2j42PiyIS",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/tapIvBFRSP",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/dZcBpNbRkD",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/Rx15sIbGro",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/leH3SfysxA",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/bxnQdmEMOC",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/NVYc2BJ0Gc",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/qtXEU55b1v",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/iNHdb2i0jC",
];
const blitly_2_sites = [
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/mSeoDMah52",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/3MivTwh2KW",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/dLPZh9WjFK",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/5IirMuJxlB",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/Y8igS3Z1ym",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/38qoCqc0P0",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/Xhc3tmwdmh",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/6gQkS1CSSj",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/4rSkMzkmpN",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/xzozzBD8lj",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/AKssKDIBuh",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/f52DRkG2vJ",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/VhN7Scs3UQ",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/AW9Eu0AMX8",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/4Ys8eiy4OF",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/m5lW0ee1dc",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/R2etqwyJcq",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/nsQdvtFXAd",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/yYUU9aLh3a",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/04UkCxeqiR",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/Hk1P1nlnqg",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/EhmBoxGysI",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/TB9vKjylqa",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/psNhf3f8Eo",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/WcFeQqjkns",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/fG0V3If4Td",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/CDvPkuxEM5",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/xIQPi7NdlX",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/o4Jvtmffhz",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/cszv5i2mC1",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/qezTkRDe8Q",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/a94Cc4jueI",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/nTcKmH6472",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/4btT9MIoia",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/G1kfIT8QFB",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/yRDAv2Nfa2",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/YCdRQyk2op",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/GhVnfsPW4i",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/iQbLKCcMIC",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/N8P6YTlUOY",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/W7eIQgzeso",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/Zl4X8rYAmX",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/XwCKtY28Mc",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/HzrUxFh5Of",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/OORvg7h7RR",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/bgqthKNd2Z",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/QMJnBE6CpU",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/AlkN8ky3VB",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/KUu6HNS0dv",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/mr5p2eGrWz",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/2v415IW5JL",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/Tsf0FjzI8u",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/A8rgYhZhpd",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/QLkn6T3J47",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/XAC9mihBw2",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/s7GEQq5obZ",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/seGuhm8jHl",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/83an57c4R5",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/SacNW9u0QC",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/UuI1QsoRSH",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/QbeMDeIDv2",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/7AD1cBFDcA",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/P284MQnNSZ",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/Os5tXPVT9b",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/AsfMZOHssJ",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/ZZO3wcKyQJ",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/WDInTJNfJX",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/SXhXynlDIY",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/JnrrYWyMGQ",
	"https://blitly.io/st?apikey=408a8f82bd8c4438b2470139c9ec62d3&url=https://xemnote.com/note/QEuEmdiRrb",
];
const web1s_1_sites = [
	"https://rac1s.com/X2G9IchiW7",
	"https://rac1s.com/gzvBf88Fnp",
	"https://rac1s.com/wYefmMG1h8",
	"https://rac1s.com/59NW5a5ryj",
	"https://rac1s.com/rWk7e78R8J",
	"https://rac1s.com/KlMC9zkltm",
	"https://rac1s.com/viA6abTkFf",
	"https://rac1s.com/LiP6KnDBMp",
	"https://rac1s.com/0Dbm49Ik0d",
	"https://rac1s.com/zQNJfmFA0E",
	"https://rac1s.com/905R3U1OBG",
	"https://rac1s.com/mekJCuJvdu",
	"https://rac1s.com/dpTQgY42TO",
	"https://rac1s.com/2ixi7Oxix8",
	"https://rac1s.com/oWQ7ZLsnEl",
	"https://rac1s.com/d1ZBjk5MBi",
	"https://rac1s.com/AZlwBQr6L0",
	"https://rac1s.com/AqnWTJvrOw",
	"https://rac1s.com/A0cgisdbYs",
	"https://rac1s.com/3zJkhi6vvf",
	"https://rac1s.com/Yn595sz06w",
	"https://rac1s.com/r22AlTqQP4",
	"https://rac1s.com/rnVjAlAvfz",
	"https://rac1s.com/GnGVMN1nBT",
	"https://rac1s.com/nBWvy96yZs",
	"https://rac1s.com/tRD0aiXm3S",
	"https://rac1s.com/H6Y7TdPIcq",
	"https://rac1s.com/9WFKr6xfoQ",
	"https://rac1s.com/iFmnYJaifa",
	"https://rac1s.com/2kKRItpwh4",
	"https://rac1s.com/B5Upjz0hMf",
	"https://rac1s.com/90L9x3VeUO",
	"https://rac1s.com/a8mt64UByN",
	"https://rac1s.com/d8XvJ87V3U",
	"https://rac1s.com/NxYfBNVWu4",
	"https://rac1s.com/kB382xx2WD",
	"https://rac1s.com/J1wiC7zGtK",
	"https://rac1s.com/cYlb75xxCP",
	"https://rac1s.com/g4T4A18kXw",
	"https://rac1s.com/K4aexL4mHv",
];
const web1s_2_sites = [
	"https://rac1s.com/76AWugt6nj",
	"https://rac1s.com/7VHPEy1qvR",
	"https://rac1s.com/aAHWwN2Zsb",
	"https://rac1s.com/geRwD2qrTb",
	"https://rac1s.com/kuGXNJ3w0b",
	"https://rac1s.com/AUrS5rc4TE",
	"https://rac1s.com/jR0g6l0GCQ",
	"https://rac1s.com/u5BRsTUTxU",
	"https://rac1s.com/OBJQJbufyF",
	"https://rac1s.com/r971gAsT0r",
	"https://rac1s.com/RKVspAZQTw",
	"https://rac1s.com/ZFXTRlVg1I",
	"https://rac1s.com/M45o8Yd3Ho",
	"https://rac1s.com/RWOVKSfAES",
	"https://rac1s.com/1QwpzXa8RX",
	"https://rac1s.com/VqoD3XcOue",
	"https://rac1s.com/i5gwTNZOMM",
	"https://rac1s.com/bfGImC65xN",
	"https://rac1s.com/ogUfw5rDsI",
	"https://rac1s.com/f0gb4byeB5",
	"https://rac1s.com/pzxLXP7uqq",
	"https://rac1s.com/HLfhhyysdO",
	"https://rac1s.com/kyREY8wUKD",
	"https://rac1s.com/4ROiYnLSrq",
	"https://rac1s.com/JvqZXiRUmV",
	"https://rac1s.com/0kPioiA03p",
	"https://rac1s.com/rHhLgcG6Wh",
	"https://rac1s.com/DLBek7r0Al",
	"https://rac1s.com/2DAiZnygUQ",
	"https://rac1s.com/Cm1GImYA1p",
	"https://rac1s.com/qQs8sQD96N",
	"https://rac1s.com/LadzUyNJ5T",
	"https://rac1s.com/SrLoyRopzx",
	"https://rac1s.com/nyLWW6ovAV",
	"https://rac1s.com/ba5fteKCAe",
	"https://rac1s.com/QwXvjRJdng",
	"https://rac1s.com/QiP9Shbiix",
	"https://rac1s.com/FqmGi1dpOQ",
	"https://rac1s.com/YBQ6UcPFe2",
	"https://rac1s.com/4HvZPATHIW",
];
const web1s_3_sites = [
	"https://rac1s.com/Q14nL2acwd",
	"https://rac1s.com/Xl7kEv3hYV",
	"https://rac1s.com/0yZMxrlBJb",
	"https://rac1s.com/xCYGM8iOLj",
	"https://rac1s.com/zYEX5OvROy",
	"https://rac1s.com/A3zVFiLkm3",
	"https://rac1s.com/jQ7rAQmahi",
	"https://rac1s.com/cRf6RZl38g",
	"https://rac1s.com/NbRdMor4tN",
	"https://rac1s.com/6KbqIcfLMR",
	"https://rac1s.com/588TCdRXCj",
	"https://rac1s.com/E92fMTibIv",
	"https://rac1s.com/Bv9quSVnjk",
	"https://rac1s.com/yb9mGapZS5",
	"https://rac1s.com/3xebzPsHNK",
	"https://rac1s.com/2JuenRw3os",
	"https://rac1s.com/nYoyRQdXxf",
	"https://rac1s.com/N34pLGcFaQ",
	"https://rac1s.com/NoZ6oYydYj",
	"https://rac1s.com/DbGB6Y0K9g",
	"https://rac1s.com/DHyyxowxzA",
	"https://rac1s.com/hSsM98DJ9i",
	"https://rac1s.com/9cO68VzkHe",
	"https://rac1s.com/PlHwDy7p5P",
	"https://rac1s.com/Br1MBmipoM",
	"https://rac1s.com/HZxuJOQdDO",
	"https://rac1s.com/UbYTQdwPh7",
	"https://rac1s.com/bFoOsBNApq",
	"https://rac1s.com/YW6VYWVqAy",
	"https://rac1s.com/CiFnHzA1OY",
	"https://rac1s.com/5ZncsxjagU",
	"https://rac1s.com/fm4x1CgzS7",
	"https://rac1s.com/oBm6qzdQA4",
	"https://rac1s.com/3QQ8qIezyX",
	"https://rac1s.com/1MkVXxCL1d",
	"https://rac1s.com/kAdQw6Fp99",
	"https://rac1s.com/NOGPC9hxSy",
	"https://rac1s.com/zkmxPDU8Lp",
	"https://rac1s.com/fsjYDgYxWl",
	"https://rac1s.com/s8ps0vJUWk",
];
const web1s_4_sites = [
	"https://rac1s.com/yaRdDMrc27",
	"https://rac1s.com/kuo0QJ2qh6",
	"https://rac1s.com/jkpOY8eVBf",
	"https://rac1s.com/dC42Ck2A5w",
	"https://rac1s.com/m2Hzwe4H7K",
	"https://rac1s.com/3v5CxVqJNY",
	"https://rac1s.com/Uuf0Vo3NzX",
	"https://rac1s.com/vTI1TrnGsg",
	"https://rac1s.com/L9VXR6WTGM",
	"https://rac1s.com/aZcoY3nTGg",
	"https://rac1s.com/bU1sbN2vsr",
	"https://rac1s.com/d5zyMq35O5",
	"https://rac1s.com/9Kr6HceG0F",
	"https://rac1s.com/Q48YjuOFps",
	"https://rac1s.com/9JM4LXodCX",
	"https://rac1s.com/GLrqgtKldr",
	"https://rac1s.com/Bv9quSVnjk",
	"https://rac1s.com/X1dg2r6z9d",
	"https://rac1s.com/AmYBrpKuEL",
	"https://rac1s.com/Zg5G4y2JWG",
	"https://rac1s.com/H8InEJKFXd",
	"https://rac1s.com/fMCojpOKj4",
	"https://rac1s.com/lbhmsbvWFy",
	"https://rac1s.com/V4OawT3HfC",
	"https://rac1s.com/0F5LYTHCBl",
	"https://rac1s.com/PQgTEd1XLi",
	"https://rac1s.com/saQFLiBEEb",
	"https://rac1s.com/SoMMQAu0w9",
	"https://rac1s.com/pzkmkoiKk2",
	"https://rac1s.com/VyL1WDRwkA",
	"https://rac1s.com/mVaWaATj55",
	"https://rac1s.com/GxWX7PgLme",
	"https://rac1s.com/8qkD79lQnG",
	"https://rac1s.com/od15UNxFLv",
	"https://rac1s.com/SCMb3JK8Xn",
	"https://rac1s.com/3GoE6nJCyL",
	"https://rac1s.com/h4tvnojomq",
	"https://rac1s.com/QtDHXoy4Bw",
	"https://rac1s.com/nmMiSJ4uK7",
	"https://rac1s.com/ZucIhCTMLF",
];
const web1s_5_sites = [
	"https://rac1s.com/HxplR1Cr6D",
	"https://rac1s.com/N4OLH00B5L",
	"https://rac1s.com/5TeSc44eV2",
	"https://rac1s.com/bPeio9gVC1",
	"https://rac1s.com/z0X6NvhGYy",
	"https://rac1s.com/EirWmRedgz",
	"https://rac1s.com/hsZXUT8B28",
	"https://rac1s.com/LLW11CGrvT",
	"https://rac1s.com/Y6msZd9nZs",
	"https://rac1s.com/hjY8Pnuvf5",
	"https://rac1s.com/vOLtjjahL5",
	"https://rac1s.com/iuOs9WAvtg",
	"https://rac1s.com/EWXfbVujK9",
	"https://rac1s.com/voiXnld7Zy",
	"https://rac1s.com/b6zkAFlJ9n",
	"https://rac1s.com/rKUR5FOFqN",
	"https://rac1s.com/aS6uYw9KBC",
	"https://rac1s.com/O4uhrCjPMs",
	"https://rac1s.com/GdmK2bT0xi",
	"https://rac1s.com/nsOgAmiKO1",
	"https://rac1s.com/R0TtoDBkeR",
	"https://rac1s.com/CGg9OINA7Q",
	"https://rac1s.com/lOTADTJb13",
	"https://rac1s.com/WzrUspnUxH",
	"https://rac1s.com/Gk01V5lDyQ",
	"https://rac1s.com/BepPP531cs",
	"https://rac1s.com/Kg4DarCY8D",
	"https://rac1s.com/RvfTA6AXfb",
	"https://rac1s.com/LABPvHfHFl",
	"https://rac1s.com/OWvvzS8774",
	"https://rac1s.com/u7t3b6fI2w",
	"https://rac1s.com/URDNsszAds",
	"https://rac1s.com/Vhk9wJ51Zw",
	"https://rac1s.com/mDMSsvZOzg",
	"https://rac1s.com/wzBPLls05Z",
	"https://rac1s.com/fqNbOmIkBC",
	"https://rac1s.com/v8cTmXAWAN",
	"https://rac1s.com/2denfuK2va",
	"https://rac1s.com/x6i066Wf82",
	"https://rac1s.com/hl7CJGCiG9",
];
const mneylink_sites = [
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/QotoDse00Y",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/EMbUBVPBmX",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/3owZ4s3bit",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/FmOWwMI0A5",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/fmZVC59xvq",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/FDrOPEvBea",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/NdG0A1x3qb",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/DOa8pBHFbf",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/Atm5hSSKV4",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/SVldLfgFfJ",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/KTmy3AhERZ",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/rcMnR6OdaI",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/IvRZ5if39R",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/Ibg8IQzR76",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/gapuEc3dRt",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/jOTgDq23Dq",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/GPO8s53bvu",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/3Ip1ajGbVh",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/QCyKJdmGuo",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/POP7yc0KaY",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/0cko0HNvaA",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/044bYaLMkl",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/EnTkWfTUuD",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/J66HLkUbpB",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/A69qJ5TivU",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/kiId4bucQs",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/5zczWDO1zp",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/nDnARYs1Ld",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/Tqxaw6NRNI",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/7wf906BSXS",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/beMsxA3FxP",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/B6z9iyjLAn",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/JlC6jbAd53",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/7rl87GYHcn",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/G3zd5wLm3Z",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/E7EbtmSofw",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/zHRshRjzke",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/mMda04bovP",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/NyALWTUNYK",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/UfwBL5USqX",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/pohMCkvclq",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/aBluRf9SPU",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/QWlki2YN6T",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/vyX5Bhmgd1",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/qUOnwjTFnk",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/ZFcIZl7XG1",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/vp2nElqpJh",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/TmCKpqN1fl",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/6HPyVpXHkS",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/FyzRiN1yvL",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/1WGAe275cp",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/zuDNSdNHjl",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/gScJLnVM3Z",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/fQR27O8u9D",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/8gYnAxsQNO",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/TOpY0476Tw",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/5r9pncebzz",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/NjDR6HyVh9",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/vwtRWpnJt8",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/7tL2gUF557",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/YHoJKlnfOO",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/paBjCDP5Zc",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/HVDUCev1jI",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/qDa6DGI8u7",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/e7fHB6ob4i",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/herw0vEZSJ",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/J0OQUkEVOA",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/r94l61KwBD",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/DfXqivZasD",
	"https://mneylink.vip/st?api=26672f47309ffeb0fd1519c09f0affb067e31662&url=https://xemnote.com/note/5iSaBdvYvo",
];
const mneydrec_sites = [
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/xafJ9JFwxn",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/AATGasZHqz",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/C5FXessIlA",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/LVJJKYxNcr",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/4U1UD08wGA",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/yPOk5y99DW",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/uwRYsh0P7H",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/Ble2hUCxAJ",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/didDTzj3V7",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/EFOHesVXCo",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/sa6j3P4fTY",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/UuNkUpoizF",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/Lqn4rrSDv4",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/KhW8XCNoH0",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/SYi4NS7hx8",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/ZSe26o3s5a",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/ASkt0xvqk6",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/rC65tIqwqj",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/nRwbtcyURS",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/4c37EiyS3q",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/DZcTjt0t0A",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/FVuAfB7Npt",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/5bB38ObWNd",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/9NfY8RN8I3",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/uhKbIFR1xR",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/gZUVFpup3L",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/QrSQtJYGPh",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/UTAhz1Ftmj",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/nsZiSfli9w",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/5nZdShiOYc",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/DKYyrHExMj",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/zJSyaz927J",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/EC3o7FekPO",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/6etTrlPl9H",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/hiJro1lwTd",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/UotPBfKaVP",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/VTiwgiqnnZ",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/iqfZfn2YAY",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/yttfv4sG85",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/4TJoZuPCl1",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/gTityjWwcn",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/rjJQYnqNeR",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/ERPfEvfzlV",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/k9Rxcebs7d",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/V9PjyAHKuf",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/JuzrDBqJ6a",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/FyWx5aU72L",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/uCGDWzhQzO",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/yArPd5bbyM",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/VZ08BynCY4",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/1zZuI05f6Z",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/uzr6NQswgB",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/8iNrQMMSot",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/o9AqYESuOK",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/7mSPjMyxaD",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/RbypZfgPvp",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/gHYO2eTDyp",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/34J5fOkAMw",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/xccDLhhWk7",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/GlbBXKntJz",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/YqEawBXe0L",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/tnZLQZf1L5",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/TFsu9c7OW7",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/qQF2IHPAT9",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/IZ7Ii8E2W5",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/hgDH1Q4OV0",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/p2fEgyd5qP",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/Cz0y23uDV2",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/WLNfpG2WKK",
	"https://mneydirec.com/st?api=b11f8df7f33bf77811f0fd939fb4f232164fa741&url=https://xemnote.com/note/gI90SxV1gs",
];
const normal_1_sites = [
	"https://rac1s.com/1pQhy4CbtX",
	"https://rac1s.com/CRg55d43Kw",
	"https://rac1s.com/Ibwk1dZowa",
	"https://rac1s.com/fDvwRIeg3T",
	"https://rac1s.com/6AWB5dw7y2",
	"https://rac1s.com/V13S0Wtc5f",
	"https://rac1s.com/VPGwgMcHbE",
	"https://rac1s.com/gPOxWzvdJC",
	"https://rac1s.com/mpmwxFXsR5",
	"https://rac1s.com/shr4eOO7j5",
	"https://rac1s.com/2CyhrlzFWJ",
	"https://rac1s.com/jvYGERuVeW",
	"https://rac1s.com/itd08R2BV2",
	"https://rac1s.com/Gk7QPnEmmM",
	"https://rac1s.com/KIT6pXJCWS",
	"https://rac1s.com/dasykkW9LP",
	"https://rac1s.com/0NNjm6movN",
	"https://rac1s.com/fULxrXE0cS",
	"https://rac1s.com/mAXYMmlaC2",
	"https://rac1s.com/tWgN7NwioB",
	"https://rac1s.com/5NDkvOPGiq",
	"https://rac1s.com/dFAMn6I55G",
	"https://rac1s.com/K2zei6luCx",
	"https://rac1s.com/zLmrWkrHTg",
	"https://rac1s.com/CZMxQA5qyg",
	"https://rac1s.com/S2V0cghCwV",
	"https://rac1s.com/MddujJnHzN",
	"https://rac1s.com/pbRmAYWFZX",
	"https://rac1s.com/Ym1Y2rDVpk",
	"https://rac1s.com/VPeeYP6Hzu",
	"https://rac1s.com/eKiQ4iQ3rf",
	"https://rac1s.com/ijkq9wbE4J",
	"https://rac1s.com/tThO7constkT",
	"https://rac1s.com/RT4yvEDFVd",
	"https://rac1s.com/f0JbmdpdFL",
];
const normal_2_sites = [
	"https://rac1s.com/9qoo1domEK",
	"https://rac1s.com/nDTkbHVCTS",
	"https://rac1s.com/UaGTB6OMZq",
	"https://rac1s.com/j7AugJN7Ol",
	"https://rac1s.com/voiKnrZHiZ",
	"https://rac1s.com/mhwpGVkCsY",
	"https://rac1s.com/MsYCeicKvA",
	"https://rac1s.com/9NVZr9xC23",
	"https://rac1s.com/5s5EsP0r5g",
	"https://rac1s.com/et2yqIhN6X",
	"https://rac1s.com/bXO3oMIcV8",
	"https://rac1s.com/DkIfk8Olm5",
	"https://rac1s.com/dsTRHRctPG",
	"https://rac1s.com/s3KUh7tHF1",
	"https://rac1s.com/XpCfmnOFlV",
	"https://rac1s.com/vYTaAPcKKh",
	"https://rac1s.com/iGta1q3yNS",
	"https://rac1s.com/mMv4sP9m2I",
	"https://rac1s.com/3EvOuBxJde",
	"https://rac1s.com/3ljyHFFB4o",
	"https://rac1s.com/GJPx1hStJR",
	"https://rac1s.com/7DYy63BuaK",
	"https://rac1s.com/tcdLp7LVmJ",
	"https://rac1s.com/DdxPlzdTuf",
	"https://rac1s.com/6BFRQZlyKy",
	"https://rac1s.com/Wf6IYlxZWe",
	"https://rac1s.com/9IgGCvafLL",
	"https://rac1s.com/wNEeWjhl8G",
	"https://rac1s.com/QGR599LyzW",
	"https://rac1s.com/LlC3gOpg3f",
	"https://rac1s.com/QLdnL1firJ",
	"https://rac1s.com/1BhERNl4pv",
	"https://rac1s.com/grPmiC1Zdv",
	"https://rac1s.com/vYw9iR3DIF",
	"https://rac1s.com/EEVk0QqL6H",
];
const meme_1_sites = [
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/ZtWdJ47efs",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/Va05DzynZt",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/A0txzPxSN4",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/nUXCNHBX8g",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/nUXCNHBX8g",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/cQeai380nK",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/0FfYP0h1eE",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/TceUzzTWXc",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/sd4wFySSYl",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/ORsGdZxtyn",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/PvASXPfCcX",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/l0n4Ncu6Fv",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/sSqYn6rCi3",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/Kh36uC4Bj2",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/Xa9F2mvTbW",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/ufs5UOHxtj",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/FPkoXeIecK",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/DiCiUQVln2",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/JV9YWB6zzm",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/vMKjyoY1Dl",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/e8nyBryJxA",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/TGwGPtLujz",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/l0n4Ncu6Fv",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/Ay86OyNQVn",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/1zSnslJ1uN",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/mGoKEr8KYI",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/7uTCfSAQR1",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/MKAvHA297S",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/HllD9wb2sN",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/lY7IdxoiEZ",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/PMPbecQzE6",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/oxCM3ob2bq",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/WLIXQIelDc",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/2IuH9wEoNh",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/H3qnOkB9oF",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/4nQiOPMvno",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/CAzd0ZHxs7",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/NYRDwKH0gA",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/IvVktBZCq6",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/Wswf9RK4rn",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/whYmP5qPDR",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/oQ0tTEwacO",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/DC0nTnWAxW",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/UQqYQiPcpB",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/0YKgw9eslM",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/X5DcuCaIxe",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/09AfkK5LSv",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/WKKX4ZPaWl",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/99AvTkUMaH",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/g1FxZk5w8w",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/uq3kpQHGID",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/Ux8Ilr7Zs5",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/G69AL8vTPW",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/dt2SGufCol",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/w8jxxWT2sG",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/r9fG3ZeONW",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/pbq8pKQrIx",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/vdZC493PnH",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/BsFeFPiFzw",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/XotwaASMch",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/3rA7gtYkaf",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/6NVlZrxWsd",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/pMaIltlsPj",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/xARKanUjOy",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/IRSY6QlzRS",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/uZiedQMvwq",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/AVVHG18pSS",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/cN0x90EL9H",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/ur8ui6OlzP",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/sfPOhqI3WL",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/Dn7Rum5tjc",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/fkTId4n2r2",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/HiZ3hZw4H9",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/RThQtuMQRD",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/qqKdg3ZLjx",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/Qv8aYB6YmW",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/EZtNq2YiK5",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/voUnEkGLEP",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/lp1yZnzaAn",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/t1A6HuQrCU",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/jfU3zLb1zu",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/qGcMUB6lRi",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/vfdOQYPR3N",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/EYOJOZiJK7",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/nYw1gDFnzR",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/LD7YODkfdp",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/i07Ud7B3Bw",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/hVws3XoeCM",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/dQWxJ1q1Qn",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/QbebpzhBbJ",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/OarUDXrq67",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/cVkaJHARN7",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/ZZZHAmBqmk",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/8hYqtNZcND",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/oH2UIQr7oC",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/QNrZA5xDXM",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/qcfc5DNQkY",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/USi4G3qVwC",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/dWQmUc3FXe",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/XC8KVu5Cmj",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/q7QQCtHT9D",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/TMPKh2Rlj6",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/6YduHs9k1o",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/B2qN7CpDgh",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/B2qN7CpDgh",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/QVHlCdK60D",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/3SyomK67DC",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/rAEVzrUXbr",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/35O6LQXy2V",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/gVvmLcjt5n",
];
const meme_2_sites = [
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/e3QkxDiY1k",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/5f1gMbuMxr",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/R08YuSTXow",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/YwKEW7OI9B",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/dNmnjAs8xj",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/IRr3tijRN0",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/VjoxXcQE95",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/bnB5W7EAG0",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/XtfDpIBaOk",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/iciamo5ekl",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/yDhyJfJDOw",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/AcMYnYC5G7",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/xljetPaNcs",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/BvU3uZYOWd",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/A6WkBHlDUp",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/bOK5Do4k60",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/ucCXaHJo6Y",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/SpMuWLwdeO",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/7dgPHOk2P4",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/46NDd2gXZx",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/sp0aejRd1p",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/pluCm9q1li",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/zooXqoW118",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/LqIUiEm0nK",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/tmTAkvEBRa",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/dOi2GbWrl5",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/6pIhFBQvED",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/YcgLsA6bXU",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/S4Dm1ntWEZ",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/KkZsXQk52V",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/ZSfHYcy3XD",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/5oA3ThQJnc",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/WVUzeok0DE",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/TSncTzuMll",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/dIWle71Plm",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/fS2KVjUztn",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/ZWeTCC6UHl",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/FKJB3xOHxR",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/Vk6PRQf8ti",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/ej5nW7PtoR",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/3xy6d7uSZP",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/qB24TGJmSd",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/Liw606rDvF",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/DGQ00z3Op6",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/lwlz5Ea3ZP",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/Pw2PO8HNRJ",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/HPP2nCSHB2",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/qtMDi2iE1w",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/xmdXhUT3SF",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/FpmotMSm9K",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/B3rqGS3w8D",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/h2uxnd2aYF",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/nVONdUO7bX",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/PgWKp4WNP6",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/ruHK9hFlDk",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/z9pxcOwyEs",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/Tdq03k4tW1",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/A589o6vubZ",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/bIrPp3sqTv",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/aICAfjZhJU",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/kgPX3tdOXM",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/ACxJkeA2bD",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/cWfMd57fS7",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/TExQhX9ljX",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/xOD2LMfjJk",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/nEyVdRad3t",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/gcsa39AGCs",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/fzG0pfc6kz",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/1zWzaA69nQ",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/vXbRZaQ2u6",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/K84lANjAsY",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/WjWaF9evEq",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/byWrOo3ESk",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/9qXj9TzpEE",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/y4GAcOniiE",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/j7aC7HgaTV",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/oGwEexNSNR",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/InjlGushIn",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/8wwQLXf2d3",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/P854TXTeGh",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/6MAUxQb7WY",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/t2UW4RQV6B",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/GFEwy0h0Bi",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/E9xmQ8bwsr",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/djQshHqpK9",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/aJG55ovcKV",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/8VF3owrn3d",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/s3OSd6fdvj",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/OHbQJS3npY",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/bX1dXT23NA",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/wbgqpUNDK3",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/0UpYZF3IMz",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/Exw0uF8gHd",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/fu8EKevlEO",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/MQALXPWvTv",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/NSgXrjdsCz",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/Ya0W0SWcRi",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/oYAZefsxQz",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/Ae7IDOBCCI",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/JmCNsQfG1h",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/OtGnzyuZTh",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/p8tRMkERKH",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/VRsIIyTcf7",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/mjpD29fNmN",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/BA9m70QZ7Y",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/r8LGpZW4uV",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/SMxFzhKpbe",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/u2vzu06Qhw",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/vDfkO9r58E",
	"https://memelink.net/st?apikey=ab47a395005e48e0b43fed1076063bf8&url=https://xemnote.com/note/mBZNCNXgCF",
];
const ggoklink_sites = [];
const bitlybox_1_sites = [
	"https://bitlybox.com/api/v1/short-link/ql?token=V16vUYZgxu147omJE275Z9SlpKI8ZCGi&url=https://xemnote.com/note/BOFQFXDwYZ",
];
const bitlybox_2_sites = [
	"https://bitlybox.com/api/v1/short-link/ql?token=V16vUYZgxu147omJE275Z9SlpKI8ZCGi&url=https://xemnote.com/note/fSr3RgYFQV",
];
const teckurl_sites = [
	"https://teckurl.click/apiv5.php?token=1NSnALke0lNmjwIuYFqwZli7ydNocVxn&url=https://xemnote.com/note/RvY8kV7PNu",
];
function directblitly_1() {
	window.open(
		direct_blitly_1_sites[
		Math.round(Math.random() * (direct_blitly_1_sites.length - 1))
		]
	);
	return false;
}
function directblitly_2() {
	window.open(
		direct_blitly_2_sites[
		Math.round(Math.random() * (direct_blitly_2_sites.length - 1))
		]
	);
	return false;
}
function blitly_1() {
	window.open(
		blitly_1_sites[Math.round(Math.random() * (blitly_1_sites.length - 1))]
	);
	return false;
}
function blitly_2() {
	window.open(
		blitly_2_sites[Math.round(Math.random() * (blitly_2_sites.length - 1))]
	);
	return false;
}
function web1s_1() {
	window.open(
		web1s_1_sites[Math.round(Math.random() * (web1s_1_sites.length - 1))]
	);
	return false;
}
function web1s_2() {
	window.open(
		web1s_2_sites[Math.round(Math.random() * (web1s_2_sites.length - 1))]
	);
	return false;
}
function web1s_3() {
	window.open(
		web1s_3_sites[Math.round(Math.random() * (web1s_3_sites.length - 1))]
	);
	return false;
}
function web1s_4() {
	window.open(
		web1s_4_sites[Math.round(Math.random() * (web1s_4_sites.length - 1))]
	);
	return false;
}
function mneylink() {
	window.open(
		mneylink_sites[Math.round(Math.random() * (mneylink_sites.length - 1))]
	);
	return false;
}
function mneydrec() {
	window.open(
		mneydrec_sites[Math.round(Math.random() * (mneydrec_sites.length - 1))]
	);
	return false;
}
function normal_1() {
	window.open(
		normal_1_sites[Math.round(Math.random() * (normal_1_sites.length - 1))]
	);
	return false;
}
function normal_2() {
	window.open(
		normal_2_sites[Math.round(Math.random() * (normal_2_sites.length - 1))]
	);
	return false;
}
function memelink_1() {
	window.open(
		meme_1_sites[Math.round(Math.random() * (meme_1_sites.length - 1))]
	);
	return false;
}
function memelink_2() {
	window.open(
		meme_2_sites[Math.round(Math.random() * (meme_2_sites.length - 1))]
	);
	return false;
}
function teckurl() {
	window.open(
		teckurl_sites[Math.round(Math.random() * (teckurl_sites.length - 1))]
	);
	return false;
}
function ggoklink() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "run_php.php", true); // Thay đổi đường dẫn đến tệp PHP của bạn
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			// Xử lý kết quả từ mã PHP
			var response = xhr.responseText;
			alert(response); // Hiển thị thông báo hoặc thay đổi DOM tùy ý
		}
	};
	xhr.send();
}

function bb1() {
	window.open(
		bitlybox_1_sites[
		Math.round(Math.random() * (bitlybox_1_sites.length - 1))
		]
	);
	return false;
}
function bb2() {
	window.open(
		bitlybox_2_sites[
		Math.round(Math.random() * (bitlybox_2_sites.length - 1))
		]
	);
	return false;
}
function noti() {
	const banner = document.getElementById("banner");
	const blur = document.getElementById("main");
	const trigger = document.getElementById("trigger-noti");
	if (banner.style.display === "none") {
		banner.style.display = "block";
		blur.style.filter = "blur(8px)";
		trigger.innerHTML = "đóng";
	} else {
		banner.style.display = "none";
		trigger.innerHTML = "đọc thông báo nhiệm vụ ở đây!";
		blur.style.filter = "blur(0)";
	}
}

