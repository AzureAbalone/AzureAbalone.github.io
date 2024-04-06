<!DOCTYPE html>
<html lang="vi">

<head>
	<meta charset="utf-8" />
	<title>Redirect nhiệm vụ</title>
	<style>
		<?php include 'style.css' ?>
	</style>
	<script>
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
				// const w1s1 = document.getElementById("w1s1");
				// const w1s2 = document.getElementById("w1s2");
				// const w1s3 = document.getElementById("w1s3");
				// const w1s4 = document.getElementById("w1s4");
				// const w1s5 = document.getElementById("w1s5");
				const ml = document.getElementById("ml");
				const md = document.getElementById("md");
				// const bb1 = document.getElementById("bb1");
				// const bb2 = document.getElementById("bb2");
				if (hours >= 0 && hours <= 21) {
					// w1s1.disabled = false;
					// w1s1.style.backgroundColor = "rgb(237, 28, 36)";
					// w1s1.style.cursor = "pointer";
					// w1s2.disabled = false;
					// w1s2.style.backgroundColor = "rgb(237, 28, 36)";
					// w1s2.style.cursor = "pointer";
					// w1s3.disabled = false;
					// w1s3.style.backgroundColor = "rgb(237, 28, 36)	";
					// w1s3.style.cursor = "pointer";
					// w1s4.disabled = false;
					// w1s4.style.backgroundColor = "rgb(237, 28, 36)	";
					// w1s4.style.cursor = "pointer";
					// w1s5.disabled = false;
					// w1s5.style.backgroundColor = "rgb(237, 28, 36)	";
					// w1s5.style.cursor = "pointer";
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
						// 	if (hours >= 0 && hours <= 4) {
						// 		bb1.disabled = false;
						// 		bb1.style.backgroundColor = "";
						// 		bb1.style.cursor = "pointer";
						// 		bb2.disabled = false;
						// 		bb2.style.backgroundColor = "";
						// 		bb2.style.cursor = "pointer";
						// 	} else {
						// 	}
					} else {
					}
				} else {
				}
			},
			false
		);
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
	</script>
	<script>
		<?php include 'script.js' ?>
	</script>
	<?php include 'api.php' ?>
</head>

<body>
	<div>
		<div class="container"><button id='trigger-noti' class='noti notih' onclick='noti()'>Đọc thông báo nhiệm vụ ở
				đây!</button>
		</div>
		<div id="main">
			<div class='container'>
				<button type="button" onclick="directblitly_1()" class="db" id='db1' disabled>
					<span>Direct-blitly lần 1</span>
					<button type="button" onclick="directblitly_2()" class="db" id='db2' disabled>
						<span>Direct-blitly lần 2</span>
					</button>
			</div>
			<div class="container">
				<button type="button" onclick="blitly_1()" class="bl" id='bl1' disabled>
					<span>Blitly lần 1</span>
				</button>
				<button type="button" onclick="blitly_2()" class="bl" id='bl2' disabled>
					<span>Blitly lần 2</span>
				</button>
			</div>
			<div class="container">
				<button type="button" onclick="web1s_1()" class="w1s" id='w1s1' disabled>
					<span>Web1s lần 1</span>
				</button>
				<button type="button" onclick="web1s_2()" class="w1s" id='w1s2' disabled>
					<span>Web1s lần 2</span>
				</button>
				<button type="button" onclick="web1s_3()" class="w1s" id='w1s3' disabled>
					<span>Web1s lần 3</span>
				</button>
				<button type="button" onclick="web1s_4()" class="w1s" id='w1s4' disabled>
					<span>Web1s lần 4</span>
				</button>
				<button type="button" onclick="web1s_5()" class="w1s" id='w1s5' disabled>
					<span>Web1s lần 5</span>
				</button>
			</div>
			<div class="container">
				<button class="ml" type="button" onclick="mneylink()" id='ml' disabled><span>Mneylink</span></button>
				<button class="md" type="button" onclick="mneydrec()" id='md' disabled><span>Mneydrec</span></button>
			</div>
			<div class="container">
				<button class="nm" type="button" onclick="normal_1()"><span>Normal lần
						1</span></button>
				<button class="nm" type="button" onclick="normal_2()"><span>Normal lần
						2</span></button>
			</div>
			<div class="container">
				<button class="mm" type="button" onclick="memelink_1()" id='mm1' disabled><span>Memelink lần
						1</span></button>
				<button class="mm" type="button" onclick="memelink_2()" id='mm2' disabled><span>Memelink lần
						2</span></button>
			</div>
			<div class="container">
				<button class="tu" type="button" onclick="teckurl()"><span>Teckurl</span></button>
				<button class="gg" type="button" id='gg' onclick="ggoklink()"><span>Ggoklink</span></button>
			</div>
			<div class="container">
				<button class="bb" type="button" id='bb1' onclick="bb1()" disabled><span>Bitlybox lần 1</span></button>
				<button class="bb" type="button" id='bb2' onclick='bb2()' disabled><span>Bitlybox lần 2</span></button>
			</div>
		</div>
		<div class="noti" id='banner'>
			<p>Làm hết các nhiệm vụ rồi mà muốn làm tiếp thì bật 4g, làm hết = 4g r phải đổi máy và đổi IP nhé<br>
				<strong>Lưu ý:</strong>
			</p>
			<ul>
				<li>
					Muốn làm thêm phải đổi ip và thiết bị khác (đổi mạng thì phải check ip xem đã đổi chưa)
				</li>
				<li>
					Check ip: <a href="https://whatismyipaddress.com/vi-vn/index" target='_blank'>Check IP</a> (check
					cái ipv4 với v6 nhé)
				</li>
				<li>
					Mney, blitly, direct, meme nghiêm cấm bật tắt 4g, vpn, dns (làm cách nhau 5p)
				</li>
				<li>
					Teckurl chỉ cần chụp ảnh cuối
				</li>
				<li>
					Web1s, bitlybox, teckurl, normal mọi người cứ làm xả láng nhé, ko cần phải đợi đến giờ làm nhé cũng
					không cần chia thành viên.
				</li>
			</ul>
			<p>
				Giới hạn tgian làm nhiệm vụ: Trước 19h mỗi ngày (web1s ngoại lệ trc 21h, normal và teckurl mở 24/24)<br>
				Bảng xếp hạng:
				<a target='_blank'
					href="https://docs.google.com/spreadsheets/d/1X6qNNhvibLyCD2rRrVBcRB4qEHdnR8MHYzjDpOW9Fqc/edit?usp=sharing">Bảng
					xếp hạng</a> <br>
				Làm xong chụp ảnh gửi ad <a href="https://t.me/Azure_Abalone" target='_blank'>Bào ngư</a>. Khi gửi phải
				nói rõ làm máy 1, 2 hay 3 wifi hay 4g để ad check
			</p>
			<h3>1 tuần làm ít nhất 4000đ nhiệm vụ phụ, ai không làm đủ ad không bank. Bận không
				làm
				được thì nhắn ad xin nghỉ.</h3>
		</div>
	</div>
</body>

</html>