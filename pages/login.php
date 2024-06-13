	<!-- ================ start banner area ================= -->
	<section class="blog-banner-area" id="category">
		<div class="container h-100">
			<div class="blog-banner">
				<div class="text-center">
					<h1>Login / Register</h1>
					<nav aria-label="breadcrumb" class="banner-breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><a href="#">Home</a></li>
							<li class="breadcrumb-item active" aria-current="page">Login/Register</li>
						</ol>
					</nav>
				</div>
			</div>
		</div>
	</section>
	<!-- ================ end banner area ================= -->

	<!--================Login Box Area =================-->
	<section class="login_box_area section-margin">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<div class="login_box_img">
						<div class="hover">
							<h4>Впервые на нашем сайте?</h4>
							<p>Зарегистрируйтесь, чтобы получить все преимущества премиум аккаунта.</p>
							<a class="button button-account" href="/register">Зарегистрируйтесь</a>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="login_form_inner">
						<h3>Авторизоваться</h3>
						<form class="row login_form" onsubmit="sendLoginForm(this); return false;" id="contactForm">
							<div class="col-md-12 form-group">
								<input type="email" class="form-control" required name="email" placeholder="Ваш Email"
									onfocus="this.placeholder = ''" onblur="this.placeholder = 'Ваш Email'">
							</div>
							<div class="col-md-12 form-group">
								<input type="password" class="form-control" name="pass" placeholder="Пароль"
									onfocus="this.placeholder = ''" onblur="this.placeholder = 'Пароль'">
							</div>
							<div class="col-md-12 form-group">
								<div class="creat_account">
									<input type="checkbox" id="f-option2" name="selector">
									<label for="f-option2">Оставаться авторизованным</label>
								</div>
							</div>
                            <p id="info"></p>
							<div class="col-md-12 form-group">
								<button type="submit" class="button button-login w-100">Авторизоваться</button>
								<a href="#">Забыли пароль?</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--================End Login Box Area =================-->
<script>
    async function sendLoginForm(forma) {
        let formData = new FormData(forma);
        let response = await fetch("authUser", {
            method: "POST",
            body: formData,
        });
        let res = await response.json();

        if (res.result == "success") {
            
            setTimeout(() => {
                location.href = "users";
            }, 1500);
            console.log("Вход в кабинет успешен!");
        } else if (res.result == "pass fail") {
            document.getElementById("info").innerText =
                "Неверный пароль!";
        }else if (res.result == "login fail") {
            document.getElementById("info").innerText =
                "Такой пользователь не зарегистрирован!";
    }
    }
</script>