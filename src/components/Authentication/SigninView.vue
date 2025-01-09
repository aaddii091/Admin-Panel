<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style> @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

:root {
    --Neutral-500: #737373;
    --Neutral-900: #171717;
    --Neutral-400: #A3A3A3;
    --Neutral-200: #E5E5E5;
    --Generic-White: #FFFFFF;
    --primary-500-main: #6366F1;
}

/*Universal selectors*/
*{
    margin : 0;
    padding : 0;
    box-sizing: border-box;
    font-family: Nunito, sans-serif;
}

/* Nunito - Regular (Selection Color 900) */
.nunito-regular-color900 {
    color: var(--Neutral-900, #171717);
    font-family: "Nunito", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

/* Nunito - Regular (Selection Color 500) */
.nunito-regular-color500 {
    color: var(--Neutral-500, #737373);
    text-align: right;

    /* Paragraph/Small/Regular */
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
}

/* Nunito - Regular (Selection Color 400) */
.nunito-regular-color400 {
    color: var(--Neutral-400, #A3A3A3);

    /* Paragraph/Small/Regular */
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
}

/* Nunito - Small Regular */
.nunito-small-regular {
    color: #84818A;

    text-align: center;
    /* Paragraph/XSmall/Regular */
    font-family: Nunito;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
}

/* Nunito - Medium */
.nunito-medium-white-justified {
    color: var(--Generic-White, #FFF);
    text-align: justify;

    /* Paragraph/Medium/Medium */
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
}

/* Nunito - Medium Center */
.nunito-medium-primary-center {
    color: var(--primary-500-main, #6366F1);
    text-align: center;

    /* Paragraph/Medium/Medium */
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
}

/* Nunito - Semiold */
.nunito-semibold-color900 {
    color: var(--Neutral-900, #171717);
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 142.857% */
}

/* Nunito Sans - Italic with custom weight */
.nunito-bold-color700 {
    color: var(--Neutral-700, #404040);

    /* Heading/H2/Bold/Desktop */
    font-family: Nunito;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 122.222% */
    text-align: center;
}

.Signin-rightside {
    display: flex;
    width: 488px;
    padding: 24px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 12px;
    background: var(--Generic-White, #FFF);
    position: absolute;
    left: 50%;
}

/*Final style*/

.Signin-picture {
    width: 400px;
    flex-shrink: 0;
    position: absolute;
    top: 55%; /* Center the image vertically */
    left: 25%; /* Center the image horizontally */
    transform: translate(-50%, -50%); /* Precisely align the image to the center */
}

.Signin-leftside {
    background-color: #EEF2FF;
    width: 49%; /* Occupy half of the screen's width */
    height: 182.4px; /* Adjust height as needed */
    margin: 0 ; /* Left positions the rectangle horizontally */
}

.zengarden-logo {
    width: 238px;
    height: 51.958px;
    flex-shrink: 0;
    position: absolute;
    top: 16%; /* Center the image vertically */
    left: 23%; /* Center the image horizontally */
    transform: translate(-50%, -50%); /* Precisely align the image to the center */
}

.icon-eye {
    width: 20px;
    height: 20px;
}

.icon-google{
    width: 24px;
    height: 24px;
}

.Signin-rightside .input-box {
    align-self: stretch;
    color: var(--Neutral-900, #171717);
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 142.857% */
}

.Signin-rightside .input-box .email-box {
    color: var(--Neutral-400, #A3A3A3);

    /* Paragraph/Small/Regular */
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    display: flex;
    gap: 4px;
    align-self: stretch;
    height: 40px;
    width: 440px;
    padding: 8px 12px;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    border-radius: 6px;
    border: 1px solid var(--Neutral-200, #E5E5E5);
    background: var(--Generic-White, #FFF);

    /* Drop shadow/XSmall */
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    }

#email {
    border: none; /* Removes the border */
    outline: none; /* Removes the focus outline (optional) */
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
    }

#password {
    border: none; /* Removes the border */
    outline: none; /* Removes the focus outline (optional) */
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
}

.Signin-rightside .forgot-password {
    align-self: stretch;
    color: var(--Neutral-500, #737373);
    text-align: right;

    /* Paragraph/Small/Regular */
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
}

.Signin-rightside .remember-me {
    display: flex;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    flex: 1 0 0;
    color: var(--Neutral-900, #171717);

    /* Paragraph/Small/Regular */
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
}

.Signin-rightside .remember-me .remember-me-checkbox{
    background: var(--Generic-White, #FFF);
    width: 20px;
    height: 20px;
    border: 1.5px solid var(--Neutral-300, #D4D4D4); /* Customize the border color and thickness */
    border-radius: 4px; /* Optional: Round the corners */
    appearance: none; /* Remove the default styling */
    -webkit-appearance: none; /* Ensure cross-browser consistency */
    cursor: pointer;
}

/*
.Signin-rightside .remember-me .remember-me-checkbox:checked {
    background-color: lightblue; 
    border-color: darkblue;
} */

.Signin-rightside .btn {
    display: flex;
    height: 44px;
    width: 440px;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    align-self: stretch;
    border-radius: 24px;
    background: var(--Zen-Primary-Primary-500, #3C50E0);
    color: var(--Generic-White, #FFF);
    text-align: justify;
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    border: none; /* No border */
}

.Signin-rightside .btnGoogle {
    display: flex;
    height: 44px;
    width: 440px;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    align-self: stretch;
    border-radius: 24px;
    border: 1px solid var(--primary-500-main, #6366F1);
    color: var(--primary-500-main, #6366F1);
    text-align: center;
    background-color: var(--Generic-White, #FFFFFF);

    /* Paragraph/Medium/Medium */
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
}

.Signin-rightside .line-block .line {
    width: 177px;
    height: 1px;
    flex-shrink: 0;
    background: #DCDBDD;
}

/*color: var(--Neutral-500, #737373);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */ </style>
  </head>
  <body>
    <span class="Signin-leftside">
      <img
        src="Signin-picture.png"
        alt="Sign in image"
        class="Signin-picture"
      />
      <img
        src="Zengarden Logo group 22.png"
        alt="Zengarden Logo"
        class="zengarden-logo"
      />
    </span>
    <div class="Signin-rightside">
      <form>
        <h1 class="nunito-bold-color700">Sign in</h1>

        <div class="input-box">
          <label for="email">Email Address</label>
          <div class="email-box">
            <input
              type="text"
              id="email"
              placeholder="john.dowry@example.com"
              required
            />
          </div>
        </div>
        <div class="input-box">
          <label for="password">Password</label>
          <div class="email-box">
            <input type="password" id="password" placeholder="" required />
            <div class="icon-eye">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M12.2004 10.0003C12.2004 11.2158 11.2151 12.2011 9.99967 12.2011C8.78423 12.2011 7.79892 11.2158 7.79892 10.0003C7.79892 8.78488 8.78423 7.79957 9.99967 7.79957C11.2151 7.79957 12.2004 8.78488 12.2004 10.0003Z"
                  stroke="#737373"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 10.0003C3.93479 7.02408 6.71528 4.86523 9.99999 4.86523C13.2847 4.86523 16.0652 7.02411 17 10.0003C16.0652 12.9766 13.2847 15.1354 10 15.1354C6.71527 15.1354 3.93477 12.9765 3 10.0003Z"
                  stroke="#737373"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
        <div class="remember-me">
          <label> <input class="remember-me-checkbox" type="checkbox" /> Remember Me </label>
        </div>

        <button type="submit" class="btn">Sign In</button>
        <div class="line-block">
            <span class="line"></span>
            <p>or</p>
        </div>
        <button type="submit" class="btnGoogle">
          <div class="icon-google">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M23.0015 12.2336C23.0015 11.3702 22.93 10.7402 22.7753 10.0869H12.7158V13.9835H18.6205C18.5015 14.9519 17.8587 16.4102 16.4301 17.3902L16.41 17.5206L19.5907 19.9354L19.811 19.9569C21.8348 18.1252 23.0015 15.4302 23.0015 12.2336Z"
                fill="#4285F4"
              />
              <path
                d="M12.715 22.4996C15.6078 22.4996 18.0363 21.5662 19.8102 19.9562L16.4292 17.3895C15.5245 18.0078 14.3102 18.4395 12.715 18.4395C9.88167 18.4395 7.47693 16.6079 6.61971 14.0762L6.49406 14.0866L3.18681 16.595L3.14355 16.7128C4.90543 20.1428 8.52448 22.4996 12.715 22.4996Z"
                fill="#34A853"
              />
              <path
                d="M6.61997 14.0765C6.39379 13.4232 6.26289 12.7231 6.26289 11.9998C6.26289 11.2764 6.39379 10.5765 6.60807 9.92313L6.60208 9.78398L3.25337 7.23535L3.14381 7.28642C2.41765 8.70977 2.00098 10.3081 2.00098 11.9998C2.00098 13.6915 2.41765 15.2897 3.14381 16.7131L6.61997 14.0765Z"
                fill="#FBBC05"
              />
              <path
                d="M12.715 5.55997C14.7269 5.55997 16.084 6.41163 16.8579 7.12335L19.8817 4.23C18.0246 2.53834 15.6078 1.5 12.715 1.5C8.52451 1.5 4.90544 3.85665 3.14355 7.28662L6.60783 9.92332C7.47696 7.39166 9.88171 5.55997 12.715 5.55997Z"
                fill="#EB4335"
              />
            </svg>
          </div>
          Sign in with Google
        </button>

        <div class="register-link">
          <p>
            Don't have an account?
            <a class="nunito-medium-primary-center" href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  </body>
</html>
