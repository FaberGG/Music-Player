window.addEventListener("load", ()=>{
  iniciarReproductor();
});

let caratula, caratulaDOM, idFrame, allTextLines = " ", lyrics = [], llave = [], tim = [],
  line = " ",
  mode = 'claro',
  reproduciendo = 0,
  listadoCanciones = [
    "Chapeleiro-MambaNegra",
    "FantomenK-CrystalTokyo",
    "JackU-ToU",
    "LemKuuja-Yelena",
    "MacklemoreRyanLewis-ThriftShop",
    "LilNasX-INDUSTRYBABY",
    "Knaan-BangBang",
    "JamieBerry-LightuptheNight",
    "Deadmau5-GhostsNStuff",
    "CarolinaGaitan-WeDontTalkAboutBruno",
    "CardiB-LikeIt-DillonFrancisRemix",
    "Acraze-DoItToIt-TiestoRemix",
  ],
  listadoArtistas = [
    "Chapeleiro", 
    "Fantomenk", 
    "Jack U", 
    "LemKuuja",
    "Macklemore & Ryan Lewis",
    "LilNasX",
    "K'naan",
    "JamieBerry",
    "Deadmau5",
    "CarolinaGaitan",
    "CardiB - Dillon Francis",
    "Acraze - Tiesto"

  ],
  listadoTitulos = [
    "Mamba Negra", 
    "Crystal Tokyo", 
    "To U", 
    "Yelena",
    "Thrift Shop",
    "INDUSTRYBABY",
    "Bang Bang",
    "Light up the Night",
    "Ghosts 'N' Stuff",
    "We Don't Talk About Bruno",
    "Like It(Dillon Francis Remix)",
    "Do It To It(Tiesto Remix)"
  ],
  // aqui estan las letras de archivos .lrc convertidos a strings. pero si tu puedes crar un funcion que lea los archivos te ahorrarias esto 
  listadoLetras = [
    "[01:19.68]I don't know what's so fucking funny\r\n[01:33.71]I don't know what's so fucking funny\r\n[03:20.73]His biggest power is probably deception getting you to believe-lieve-lieve-lieve\r\n[03:50.83](Biggest power is probably decep')\r\n",
    "",
    "[00:11.47]Believe me, I could live without you\r\n[00:14.39]But I really don't want to\r\n[00:17.35]Believe me, I could love without you\r\n[00:20.23]But I really don't need to\r\n[00:23.44]'Cause leavin' is the hardest thing to do\r\n[00:29.39]But being left is harder, yes it's true\r\n[00:35.08]But try coming back\r\n[00:37.83]How do I get back to you, to you, to you?\r\n[00:45.84]How can I get back to you?\r\n[00:58.02]Let me get back to you\r\n[01:11.51]Leavin' is the hardest thing to do\r\n[01:17.24]But being left is harder, yes it's true\r\n[01:23.18]But try coming back\r\n[01:25.81]How do I get back to you, to you, to you?\r\n[02:11.18]'Cause leavin' is the hardest thing to do\r\n[02:17.21]But being left is harder, yes it's true\r\n[02:22.90]But try coming back\r\n[02:26.08]How do I get back to you, to you, to you?\r\n[02:33.69]How can I get back to you?\r\n[02:46.30]Let me get back to you\r\n[02:58.26]Let me get back to you\r\n[03:00.98]But I don't wanna face it\r\n[03:04.42]All this time that I wasted\r\n[03:07.34]It's so close, I can taste it\r\n[03:10.00]How can I get back to you?\r\n[03:12.88]How can I get back to you?\r\n[03:15.79]How can I get back to you?\r\n[03:18.73]How can I get back to you?\r\n[03:21.76]How can I get back to you?\r\n[03:24.82]How can I get back to you?\r\n[03:27.91]How can I get back to you?\r\n[03:30.73]How can I get back to you?\r\n[03:33.91]How can I get back to you?\r\n[03:35.73]Leavin' is the hardest thing to do\r\n[03:41.36]But being left is harder, yes it's true\r\n",
    "",
    "[00:00.24]Hey Macklemore? can we go thrift shopping?\r\n[00:03.25]What, what, what, what\r\n[00:05.77]What, what, what, what\r\n[00:08.00]What, what, what, what\r\n[00:10.76]What, what, what, what\r\n[00:13.02]What, what, what, what\r\n[00:15.51]What, what, what, what\r\n[00:18.51]What, what, what, what\r\n[00:20.91]What, what, what, what\r\n[00:33.64]I'm gonna pop some tags\r\n[00:35.40]Only got twenty dollars in my pocket\r\n[00:38.65]I, I, I'm hunting, looking for a come-up\r\n[00:41.15]This is fucking awesome\r\n[00:43.65]Nah walk up to the club like, what up, I got a big cock!\r\n[00:46.42]I'm just pumped, just bought some shit from the thrift shop\r\n[00:48.92]Ice on the fringe, it's so damn frosty\r\n[00:51.43]The people like, Damn! That's a cold ass honkey.\r\n[00:53.94]Rollin' in, hella deep, headin' to the mezzanine\r\n[00:56.40]Dressed in all pink, 'cept my gator shoes, those are green\r\n[00:58.68]Draped in a leopard mink, girls standin' next to me\r\n[01:01.40]Probably shoulda washed this, smells like R. Kelly's sheets\r\n[01:04.68](Piss)\r\n[01:06.74]But shit, it was ninety-nine cents! (Bag it) Coppin' it, washin' it\r\n[01:09.94]'Bout to go and get some compliments\r\n[01:11.43]Passin' up on those moccasins someone else's been walkin' in them\r\n[01:13.46]Bummy and grungy, fuck it man, I am stuntin' and flossin' and\r\n[01:16.27]And savin' my money and I'm hella happy that's a bargain, bitch\r\n[01:19.39]I'ma take your grandpa's style, I'ma take your grandpa's style\r\n[01:21.54]No for real ask your grandpa can I have his hand-me-downs?\r\n[01:24.32](Thank you) Velour jumpsuit and some house slippers\r\n[01:26.79]Dookie brown leather jacket that I found diggin'\r\n[01:29.37]They had a broken keyboard, I bought a broken keyboard\r\n[01:31.63]I bought a skeet blanket, and then I bought a kneeboard\r\n[01:33.86]Hello, hello, my ace man, my Miller\r\n[01:36.88]John Wayne ain’t got nothing on my fringe game, hell no\r\n[01:39.41]I could take some Pro Wings, make them cool, sell those\r\n[01:41.87]The sneaker heads would be like Aw, he got the Velcros\r\n[01:44.38]I'm gonna pop some tags\r\n[01:46.37]Only got twenty dollars in my pocket\r\n[01:49.35]I, I, I'm hunting, looking for a come-up\r\n[01:51.86]This is fucking awesome\r\n[01:54.39]I'm gonna pop some tags\r\n[01:56.14]Only got twenty dollars in my pocket\r\n[01:59.37]I, I, I'm hunting, looking for a come-up\r\n[02:02.13]This is fucking awesome\r\n[02:04.34]What you know about rockin' a wolf on your noggin?\r\n[02:07.08]What you knowin' about wearin' a fur fox skin?\r\n[02:09.58]I'm digging, I'm digging, I'm searching right through that luggage\r\n[02:11.86]One man's trash, that's another man's come up\r\n[02:14.57]Thank your granddad for donating that plaid button-up shirt\r\n[02:17.37]'Cause right now I'm up in her skirt\r\n[02:19.87]I'm at the Goodwill, you can find me in the (Uptons)\r\n[02:22.63]I'm that, I'm that sucker searchin' in that section (Uptons)\r\n[02:24.86]Your grammy, your aunty, your momma, your mammy\r\n[02:26.87]I’ll take those flannel zebra jammies, second-hand, I rock that motherfucker\r\n[02:29.88]The built-in onesie with the socks on that motherfucker\r\n[02:32.37]I hit the party and they stop in that motherfucker\r\n[02:34.87]They be like, Oh, that Gucci. That's hella tight\r\n[02:37.36]I'm like, Yo that's fifty dollars for a T-shirt\r\n[02:40.12]Limited edition, let's do some simple addition\r\n[02:42.23]Fifty dollars for a T-shirt, that's just some ignorant bitch (Shit)\r\n[02:45.23]I call that getting swindled and pimped (Shit)\r\n[02:47.62]I call that getting tricked by a business\r\n[02:50.35]That shirt's hella dope\r\n[02:51.74]And having the same one as six other people in this club is a hella don't\r\n[02:55.27]Peep game, come take a look through my telescope\r\n[02:57.69]Trying to get girls from a brand? Then you hella won't\r\n[03:01.44]Then you hella won't\r\n[03:09.95]I'm gonna pop some tags\r\n[03:12.19]Only got twenty dollars in my pocket\r\n[03:14.94]I, I, I'm hunting, looking for a come-up\r\n[03:17.69]This is fucking awesome\r\n[03:20.48]I wear your granddad's clothes\r\n[03:23.22]I look incredible\r\n[03:25.70]I'm in this big ass coat\r\n[03:27.92]From that thrift shop down the road\r\n[03:30.69]I wear your granddad's clothes\r\n[03:33.19]I look incredible\r\n[03:35.94]I'm in this big ass coat\r\n[03:37.69]From that thrift shop down the road\r\n[03:40.69]I'm gonna pop some tags\r\n[03:42.44]Only got twenty dollars in my pocket\r\n[03:45.44]I, I, I'm hunting, looking for a come-up\r\n[03:48.22]This is fucking awesome\r\n[03:52.58]Is that your grandma's coat?",
    "[00:05.79]Baby back, ayy\r\n[00:07.54]Couple racks, ayy\r\n[00:08.79]Couple Grammys on him\r\n[00:10.54]Couple plaques, ayy\r\n[00:12.30]That's a fact, ayy\r\n[00:14.04]Throw it back, ayy\r\n[00:15.29]Throw it back, ayy\r\n[00:16.79]And this one is for the champions\r\n[00:20.29]I ain't lost since I began, yeah\r\n[00:23.04]Funny how you said it was the end, yeah\r\n[00:25.79]Then I went did it again, yeah\r\n[00:30.04]I told you long ago, on the road\r\n[00:33.54]I got what they waitin' for\r\n[00:36.29]I don't run from nothin', dog\r\n[00:38.54]Get your soldiers, tell 'em I ain't layin' low\r\n[00:42.79]You was never really rootin' for me anyway\r\n[00:45.79]When I'm back up at the top I wanna hear you say\r\n[00:49.04]He don't run from nothin', dog\r\n[00:51.54]Get your soldiers, tell 'em that the break is over\r\n[00:53.54]Uh, need to, uh\r\n[00:0.00]Need to get this album done\r\n[00:0.00]Need a couple number ones\r\n[00:0.00]Need a plaque on every song\r\n[00:0.00]Need me like one with Nicki now\r\n[00:0.00]Tell a rap nigga, 'I don't see ya', ha\r\n[00:0.00]I'm a pop nigga like Bieber, ha\r\n[00:0.00]I don't fuck bitches, I'm queer, ha\r\n[00:0.00]But these niggas bitches like Madea\r\n[00:0.00]Yeah, yeah, yeah (yeah)\r\n[00:0.00]Ayy, oh, let's do it\r\n[00:0.00]I ain't fall off, I just ain't release my new shit\r\n[00:0.00]I blew up now everybody tryna sue me\r\n[00:0.00]You call me Nas, but the hood call me Doobie, yeah\r\n[00:0.00]And this one is for the champions\r\n[00:0.00]I ain't lost since I began, yeah\r\n[00:0.00]Funny how you said it was the end, yeah\r\n[00:0.00]Then I went did it again, yeah\r\n[00:0.00]I told you long ago, on the road\r\n[00:0.00]I got what they waitin' for (I got what they waitin' for)\r\n[00:0.00]I don't run from nothin', dog\r\n[00:0.00]Get your soldiers, tell 'em I ain't layin' low\r\n[00:0.00](Bitch, I ain't runnin' from no one)\r\n[00:0.00]You was never really rootin' for me anyway (like, ooh-ooh)\r\n[00:0.00]When I'm back up at the top I wanna hear you say (like, ooh-ooh)\r\n[00:0.00]He don't run from nothin', dog\r\n[00:0.00]Get your soldiers, tell 'em that the break is over\r\n[00:0.00]My track record so clean\r\n[00:0.00]They couldn't wait to just bash me\r\n[00:0.00]I must be gettin' too flashy\r\n[00:0.00]Y'all shouldn't have let the world gas me (woo)\r\n[00:0.00]It's too late 'cause I'm here to stay\r\n[00:0.00]And these girls know that I'm nasty (mm)\r\n[00:0.00]I sent her back to her boyfriend\r\n[00:0.00]With my handprint on her ass cheek\r\n[00:0.00]City talkin', we takin' notes\r\n[00:0.00]Tell 'em all to keep makin' posts\r\n[00:0.00]Wish he could but he can't get close\r\n[00:0.00]OG so proud of me that he chokin' up while he makin' toasts\r\n[00:0.00]I'm the type that you can't control\r\n[00:0.00]Said I would then I made it so (so)\r\n[00:0.00]I don't clear up rumors (ayy)\r\n[00:0.00]Where's y'all sense of humor? (Ayy)\r\n[00:0.00]I'm done makin' jokes 'cause they got old like baby boomers\r\n[00:0.00]Turn my haters to consumers\r\n[00:0.00]I make vets feel like they juniors (juniors)\r\n[00:0.00]Say your time is comin' soon but just like Oklahoma (mm)\r\n[00:0.00]Mine is comin' sooner (mm)\r\n[00:0.00]I'm just a late bloomer (mm)\r\n[00:0.00]I didn't peak in high school, I'm still out here gettin' cuter (woo)\r\n[00:0.00]All these social networks and computers\r\n[00:0.00]Got these pussies walkin' 'round like they ain't losers (losers)\r\n[00:0.00]I told you long ago, on the road\r\n[00:0.00]I got what they waitin' for (I got what they waitin' for)\r\n[00:0.00]I don't run from nothin', dog\r\n[00:0.00]Get your soldiers, tell 'em I ain't layin' low\r\n[00:0.00](Bitch, I ain't runnin' from no one)\r\n[00:0.00]You was never really rootin' for me anyway (like, ooh-ooh)\r\n[00:0.00]When I'm back up at the top I wanna hear you say (like, ooh-ooh)\r\n[00:0.00]He don't run from nothin', dog\r\n[00:0.00]Get your soldiers, tell 'em that the break is over\r\n[00:0.00]Yeah\r\n[00:0.00]I'm the industry baby, mm\r\n[00:0.00]I'm the industry baby\r\n[00:0.00]Yeah",
    "[00:04.70]She shot me, she shot me\r\n[00:05.95]Bang, bang... she shot me\r\n[00:07.45]She shot me, she shot me\r\n[00:08.70]Bang, bang... she shot me\r\n[00:09.96]She shot me, she shot me\r\n[00:11.45]Bang, bang... she shot me\r\n[00:12.71]She shot me, she shot me (Get out the way, yo)\r\n[00:14.21]Bang, bang...\r\n[00:15.46]Ahh... there she goes again\r\n[00:17.21]The girl is Ethiopian\r\n[00:17.70]In other words, she came through explodin'\r\n[00:19.20]In the podium, dynamite\r\n[00:20.71]Napoleon like sodium mixed with petroleum\r\n[00:23.46]Slowly but surely, she was walking toward me\r\n[00:26.20]Cut the convo short 'cause she had to wake up early\r\n[00:28.95]But continuing the story\r\n[00:29.95]Don't worry she gave me digits for her Blackberry\r\n[00:32.46]'You're very handsome' is what she said\r\n[00:33.95]And the way she looked in my eyes said 'Put me to bed'\r\n[00:36.21]Oh my, oh my, I should have known when she said to me on the phone\r\n[00:39.20]'You do not know me very well, but I would never hurt a fly'\r\n[00:41.95]Then she aimed at my chest with love in her eye\r\n[00:44.71]I said she aimed at my chest with love in her eye\r\n[00:46.96]She was walkin' around with a loaded shotgun\r\n[00:49.45]Ready to fire me a hot one\r\n[00:52.45]It went bang, bang, bang...\r\n[00:54.46]Straight through my heart. (Straight through my heart)\r\n[00:57.45]Although I could have walked away\r\n[00:59.95]I stood my ground and let her spray\r\n[01:02.96]She shot me, she shot me\r\n[01:04.45]Bang, bang... she shot me\r\n[01:05.95]She shot me, she shot me\r\n[01:07.21]Bang, bang... she shot me\r\n[01:08.70]She shot me, she shot me\r\n[01:10.21]Bang, bang... she shot me\r\n[01:11.45]She shot me, she shot me\r\n[01:12.71]Bang, bang...\r\n[01:14.21]Scorpion\r\n[01:15.24]She's so hot she's a scorch-ian\r\n[01:16.71]Killing me softly\r\n[01:18.20]Lauryn or Kevorkian\r\n[01:19.45]Couldn't tell if she's coo-coo or corky, when\r\n[01:22.21]I asked her her name she said 'Call me Ten.'\r\n[01:24.96]Testing, testing\r\n[01:27.20]Things just got more interesting\r\n[01:30.45]She's dressed in a vest pin, double-breasted holster\r\n[01:34.70]A very Western toaster\r\n[01:36.71]She ain't nothing Kosher\r\n[01:38.70]Ah... she lets me closer\r\n[01:41.20]Hotter than a pepper-crusted Samosa\r\n[01:43.71]While I try to keep my composure\r\n[01:45.96]She was walkin' around with a loaded shotgun\r\n[01:47.96]Ready to fire me a hot one\r\n[01:50.71]It went bang, bang, bang...\r\n[01:52.95]Straight through my heart. (Straight through my heart)\r\n[01:55.95]Although I could have walked away\r\n[01:58.71]I stood my ground and let her spray\r\n[02:01.70]She shot me, she shot me\r\n[02:03.21]Bang, bang... she shot me\r\n[02:04.45]She shot me, she shot me\r\n[02:05.95]Bang, bang... she shot me\r\n[02:07.21]She shot me, she shot me\r\n[02:08.70]Bang, bang... she shot me\r\n[02:09.96]She shot me, she shot me\r\n[02:11.45]Bang, bang...\r\n[02:12.70]Am I wrong?\r\n[02:16.96]But what is love without the pain to go along?\r\n[02:19.20]And what is pain if not the reason for me to sing this song?\r\n[02:24.96]And this song is for the weak and for the strong\r\n[02:26.70]Cause I was strong and still...\r\n[02:29.21]She got me, she got me\r\n[02:29.95]Bang, bang... she got me\r\n[02:31.20]She got me, she got me\r\n[02:32.70]Bang, bang...\r\n[02:33.70]She was walkin' around with a loaded shotgun\r\n[02:35.95]Ready to fire me a hot one\r\n[02:38.70]It went bang, bang, bang...\r\n[02:41.20]Straight through my heart. (Straight through my heart)\r\n[02:43.45]Although I could have walked away\r\n[02:46.70]I stood my ground and let her spray\r\n[02:49.96]She shot me, she shot me\r\n[02:51.21]Bang, bang... she shot me\r\n[02:52.71]She shot me, she shot me\r\n[02:53.96]Bang, bang... she shot me\r\n[02:55.20]She shot me, she shot me\r\n[02:56.70]Bang, bang... she shot me\r\n[02:57.95]She shot me, she shot me\r\n[02:59.21]Bang, bang...",
    "",
    "",
    "[00:00.91]We don't talk about Bruno, no, no, no\r\n[00:05.43]We don't talk about Bruno, but\r\n[00:10.21]It was my wedding day (it was our wedding day)\r\n[00:12.47]We were getting ready, and there wasn't a cloud in the sky (no clouds allowed in the sky)\r\n[00:19.00]Bruno walks in with a mischievous grin (thunder)\r\n[00:24.02]You telling this story or am I?\r\n[00:26.28]I'm sorry, mi vida, go on\r\n[00:28.30]Bruno says, 'It looks like rain' (why did he tell us?)\r\n[00:32.82]In doing so, he floods my brain\r\n[00:35.58]Abuela, get the umbrellas\r\n[00:37.59]Married in a hurricane\r\n[00:40.61]What a joyous day! But anyway\r\n[00:42.87]We don't talk about Bruno, no, no, no\r\n[00:47.39]We don't talk about Bruno\r\n[00:51.18]Hey, grew to live in fear of Bruno stuttering or stumbling\r\n[00:53.94]I can always hear him sort of muttering and mumbling\r\n[00:56.19]I associate him with the sound of falling sand, ch ch ch\r\n[01:00.97]It's a heavy lift with a gift so humbling\r\n[01:03.23]Always left Abuela and the family fumbling\r\n[01:05.49]Grappling with prophecies they couldn't understand\r\n[01:08.76]Do you understand?\r\n[01:10.27]A seven-foot frame, rats along his back\r\n[01:14.29]When he calls your name it all fades to black\r\n[01:18.80]Yeah, he sees your dreams and feasts on your screams (hey)\r\n[01:24.82]We don't talk about Bruno, no, no, no\r\n[01:29.35]We don't talk about Bruno\r\n[01:33.87]He told me my fish would die, the next day, dead (no, no)\r\n[01:38.39]He told me I'd grow a gut and just like he said (no, no)\r\n[01:42.17]He said that all my hair would disappear\r\n[01:44.93]Now, look at my head (no, no)\r\n[01:47.95]Your fate is sealed when your prophecy is read\r\n[01:52.22]He told me that the life of my dreams\r\n[01:56.49]Would be promised, and someday be mine\r\n[02:01.53]He told me that my power would grow\r\n[02:05.32]Like the grapes that thrive on the vine (oye, Mariano's on his way)\r\n[02:10.84]He told me that the man of my dreams\r\n[02:14.62]Would be just out of reach\r\n[02:17.63]Betrothed to another\r\n[02:20.39]It's like I hear him, now\r\n[02:21.90]Hey sis, I want not a sound out of you\r\n[02:29.43]Um, Bruno\r\n[02:31.94]Yeah, about that Bruno\r\n[02:33.96]I really need to know about Bruno\r\n[02:36.21]Gimme the truth and the whole truth, Bruno\r\n[02:38.22](Isabella, your boyfriend's here)\r\n[02:41.49]Time for dinner\r\n[02:43.24]A seven-foot frame, rats along his back\r\n[02:47.52]When he calls your name it all fades to black\r\n[02:52.29]Yeah, he sees your dreams and feasts on your screams\r\n[02:57.82]You telling this story or am I?\r\n[03:00.33]Oye, Mariano's on his way\r\n[03:02.34]Bruno says, 'It looks like rain'\r\n[03:06.61]In doing so, he floods my brain\r\n[03:11.38]Married in a hurricane he's here\r\n[03:16.65]Don't talk about Bruno, no (why did I talk about Bruno?)\r\n[03:21.18]Not a word about Bruno\r\n[03:23.69]I never should've brought up Bruno!",
    "",
    "",
  ],
  listadoVariables = [
    '--background',
    '--shadowlight',
    '--shadowdark',
    '--color',
    '--title',
    '--slider',
    '--play',
    '--playShadowDark',
    '--playShadowLight',
    '--playActiveDark',
    '--playActiveLight',
    '--song',
  ],
  cancion = {
    audio: new Audio(),
    URL: "",
    caratula: "",
    duracion: "",
  },
  reproductor = {
    deslizador: [],
    boton: [],
    caratula: [],
    duracionStart: "",
    duracionEnd: "",
    nodo: "",
  },
  urls = {
    musica: "src/audio/", 
    caratula: "src/images/" 
  },
  temas = {
    claro: ['#e0e5ec', '#ebf0f8', '#d5dae0', '#797d7f', '#a1a1a1', '#d7dbdd', '#5c87fe', '#4b6fd0','#6d9fff', '#314887', '#87c6ff','#000000'],
    oscuro: [ '#16001E', ' #1f002b', '#0d0011', '#F7B2B7', '#7e518f', '#2a0d35', '#7F2982', '#4a184b', '#b43ab9', '#4a184b', '#b43ab9', '#d584d8',],
  };






let lyricstag = document.getElementById("letra");
const portadaAlbun = document.getElementById("portadaAlbum");
function iniciarReproductor() {
  reproductor.boton["reproducirPausa"] = document.getElementById("play");
  reproductor.boton["cancionSiguiente"] = document.getElementById("siguiente");
  reproductor.boton["cancionAnterior"] = document.getElementById("anterior");
  reproductor.boton["playlist"]= document.getElementById("playlist");
  reproductor.boton["closePlaylist"] = document.getElementById("close")
  reproductor.boton["selectorTema"] = document.getElementById("switch");
  reproductor.boton["mostrarLetra"] = document.getElementById("mostrar-letra");
  reproductor.deslizador["progresoCancion"] = document.getElementById("inputRange");
  const musicList = document.querySelector(".music-list");


  reproductor.caratula = document.querySelector(".player_album img");
  reproductor.duracionStart = document.querySelector(".start time");
  reproductor.duracionEnd = document.querySelector(".end time");
  reproductor.nodo = document.querySelector(".player");


  reproductor.boton["reproducirPausa"].addEventListener("click", alternarReproduccion);
  reproductor.boton["cancionSiguiente"].addEventListener("click", () => cargarCancion(1));
  reproductor.boton["cancionAnterior"].addEventListener("click", () => cargarCancion(-1));
  reproductor.boton["selectorTema"].addEventListener("click", switchTema);
  reproductor.boton["mostrarLetra"].addEventListener("click", mostrarLetra);
  reproductor.deslizador["progresoCancion"].addEventListener("input", moverProgreso);
  reproductor.boton["playlist"].addEventListener("click", ()=>{
    musicList.classList.toggle("show");
  });
  reproductor.boton["closePlaylist"].addEventListener("click", ()=>{
      reproductor.boton["playlist"].click();
  });

  // esto a continuacion pausa o reanuda la cancion si se presiona la tecla espacio
  document.getElementById("html").addEventListener('keypress', function (e) {
    e.preventDefault();
    if(e.keyCode == 32 || e.code == "Space") {
      alternarReproduccion();
    }
  });
  reproduciendo = Math.floor((Math.random() * listadoCanciones.length));
  listPlaying();
  cargarCancion(0);
}

const ulTag = document.querySelector("ul");
for (let i = 0; i < listadoCanciones.length; i++) {
  let liTag= `<li li-index="${i}">
                <div class="row">
                  <span>${listadoTitulos[i]}</span>
                  <p>${listadoArtistas[i]}</p>
                </div>
                <span id="${listadoCanciones[i]}" class="duracion-span">3:40</span>
                <audio class="${listadoCanciones[i]}" src="${ urls["musica"] + listadoCanciones[i] }.mp3"></audio>
              </li>`;
  ulTag.insertAdjacentHTML("beforeend", liTag);

  let liAudioDuartionTag = ulTag.querySelector(`#${listadoCanciones[i]}`);
  let liAudioTag = ulTag.querySelector(`.${listadoCanciones[i]}`);
  liAudioTag.addEventListener("loadeddata", ()=>{
    let duration = duracionCancion(liAudioTag.duration);
    
    liAudioDuartionTag.innerText = `${duration.minutos}:${duration.segundos}`;
    liAudioDuartionTag.setAttribute("t-duration", `${duration.minutos}:${duration.segundos}`); //adding t-duration attribute with total duration value
  });
}

const allLiTag = ulTag.querySelectorAll("li");

//-------------- funciones:-------------------//


function processData(allText) {
  allTextLines = allText.split(/\r\n|\n/);
  next();
}

function next() {
  for (i = 0; i<allTextLines.length; i++){
      if (allTextLines[i].search(/^(\[)(\d*)(:)(.*)(\])(.*)/i) >=0 ) {
          line = allTextLines[i].match(/^(\[)(\d*)(:)(.*)(\])(.*)/i);
          tim[i] = parseInt(line[2]) * 60 + parseFloat(line[4]);
          llave[i] = line[5];
          lyrics[i] = line[6];
      }
  }
}




function mostrarLetra(){
  lyricstag.classList.toggle("hide");
  portadaAlbun.classList.toggle("show-lyrics");
  sincronizarCancion();
}

function processData(allText) {
  allTextLines = allText.split(/\r\n|\n/);
  next();
}


function next() {
  for (i = 0; i<allTextLines.length; i++){
      if (allTextLines[i].search(/^(\[)(\d*)(:)(.*)(\])(.*)/i) >=0 ) {
          line = allTextLines[i].match(/^(\[)(\d*)(:)(.*)(\])(.*)/i);
          tim[i] = parseInt(line[2]) * 60 + parseFloat(line[4]);
          llave[i] = line[5];
          lyrics[i] = line[6];
      }
  }
}

function sincronizarCancion(){
  for (let i = 0; i < tim.length; i++) {
      if(roundToTwo(cancion.audio.currentTime) == 0 & roundToTwo(tim[3]) != 0 & tim[0]== undefined) lyricstag.innerText = "";
      else if (roundToTwo(cancion.audio.currentTime) == roundToTwo(tim[i])){
          lyricstag.innerText = lyrics[i];
      }
  }
  setTimeout("sincronizarCancion()", 20);
  if(audio.onpause)return ;
  
}

function roundToTwo(num) {
  return +(Math.round(num + "e+2")  + "e-2");
}


function listPlaying(){
  for (let j = 0; j < allLiTag.length; j++) {
    let audioTag = allLiTag[j].querySelector(".duracion-span");
    
    if(allLiTag[j].classList.contains("playing")){
      allLiTag[j].classList.remove("playing");
      let adDuration = audioTag.getAttribute("t-duration");
      audioTag.innerText = adDuration;
    }

    if(allLiTag[j].getAttribute("li-index") == reproduciendo){
      allLiTag[j].classList.add("playing");
      audioTag.innerText = "Playing";
    }
    allLiTag[j].setAttribute("onclick", "clicked(this);");
  }
  
}

function clicked(element){
  let getLiIndex = parseInt(element.getAttribute("li-index"));
  reproduciendo = getLiIndex; //updating current song index with clicked li index
  cargarCancion(0);
  listPlaying();

}


function moverProgreso(e) {
  let momento = e.target.value;
  cancion.audio.currentTime = momento;
}
function switchTema() {
  let root = document.documentElement;

  if (mode=='claro'){
    for (let index = 0; index < listadoVariables.length; index++) {
      const element = listadoVariables[index];
      const colorDark = temas.oscuro[index];
      root.style.setProperty(element, colorDark);
    } mode='oscuro';
  } else{
    for (let index = 0; index < listadoVariables.length; index++) {
      const element = listadoVariables[index];
      const colorLight = temas.claro[index];
      root.style.setProperty(element, colorLight);
    }
    mode='claro';
  }
}

function cargarCancion(sentido) {
  let cambiarA = reproduciendo + sentido;

  if (cambiarA >= listadoCanciones.length) reproduciendo = 0;
  else if (cambiarA < 0) reproduciendo = listadoCanciones.length - 1;
  else reproduciendo = cambiarA;

  cancion.URL = urls.musica + listadoCanciones[reproduciendo] + ".mp3";
  cancion.caratula = urls.caratula + listadoCanciones[reproduciendo] + ".jpg";
  cancion.audio.src = cancion.URL;
  document.title =
    "F Music Player " + listadoTitulos[reproduciendo] + " - " + listadoArtistas[reproduciendo];

  reproductor.caratula.src = cancion.caratula;
  reproductor.deslizador["progresoCancion"].value = 0;
  listPlaying();
  setTimeout(() => cambiarCancion(), 500);

}

function cambiarCancion() {
  cancion.duracion = duracionCancion(cancion.audio.duration);
  reproductor.deslizador["progresoCancion"].max = cancion.audio.duration;

  document.querySelector(".player_artist").innerText =
    listadoArtistas[reproduciendo];
  document.querySelector(".player_song").innerText =
    listadoTitulos[reproduciendo];

  reproductor.duracionEnd.innerText = `${cancion.duracion.minutos}:${cancion.duracion.segundos}`;
  

  if (reproductor.boton["reproducirPausa"].classList.contains(".En_play"))
    cancion.audio.play();
}

function duracionCancion(duracionS) {
  let minutos, segundos;
  minutos = Math.floor(duracionS / 60)
    .toString()
    .padStart(2, "0");
  segundos = Math.floor(duracionS - minutos * 60)
    .toString()
    .padStart(2, "0");

  return { minutos, segundos };
}

function actualizarReproductor() {
  idFrame = requestAnimationFrame(actualizarReproductor);
  cancion.duracion = duracionCancion(cancion.audio.duration);
  let momentoActual = duracionCancion(cancion.audio.currentTime);
  reproductor.duracionStart.innerText = `${momentoActual.minutos}:${momentoActual.segundos}`;
  reproductor.duracionEnd.innerText = `${cancion.duracion.minutos}:${cancion.duracion.segundos}`;
  reproductor.deslizador["progresoCancion"].value = cancion.audio.currentTime;
  reproductor.deslizador["progresoCancion"].max = cancion.audio.duration;
  processData(listadoLetras[reproduciendo]);

  if (cancion.audio.currentTime == cancion.audio.duration) cargarCancion(1);
}

function alternarReproduccion() {
  reproductor.boton["reproducirPausa"].classList.toggle(".En_play");

  

  if (cancion.audio.paused || cancion.audio.ended) {
    idFrame = requestAnimationFrame(actualizarReproductor);
    reproductor.boton["reproducirPausa"].querySelector(".pause-btn").classList.toggle("hide");
    reproductor.boton["reproducirPausa"].querySelector(".play-btn").classList.toggle("hide");
    cancion.audio.play();
    reproductor.nodo.classList.add("reproduciendo");
  } else {
    window.cancelAnimationFrame(idFrame);
    cancion.audio.pause();
    reproductor.boton["reproducirPausa"].querySelector(".pause-btn").classList.toggle("hide");
    reproductor.boton["reproducirPausa"].querySelector(".play-btn").classList.toggle("hide");
    reproductor.nodo.classList.remove("reproduciendo");
  }
}
