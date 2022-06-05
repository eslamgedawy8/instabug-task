<template>
    <div class="notfound__container">
        <div class="notfound__wrapper">
            <div class="notfound__title">
                <h1>404</h1>
            </div>
            <h2>Oops! This Page Could Not Be Found</h2>
            <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
            <a href="/">Go To Homepage</a>
        </div>
    </div>
</template>

<style lang="css" scoped>

    .notfound__title {
        position: relative;
        height: 150px;
        line-height: 150px;
        margin-bottom: 25px;
    }
    h1{
        font-family: 'Titillium Web', sans-serif;
        font-size: 186px;
        font-weight: 900;
        margin: 0px;
        text-transform: uppercase;
        background-size: cover;
        background-position: center;
    }
    .notfound__wrapper {
        transform: translate(-50%, -50%);
        position: absolute;
        top: 50%;
        left: 50%;
    }
    h2{
        font-family: 'Titillium Web', sans-serif;
        font-size: 26px;
        font-weight: 700;
        margin: 0;
    }
    p{
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 0px;
        text-transform: uppercase;
    }
    a{
        font-family: 'Titillium Web', sans-serif;
        display: inline-block;
        text-transform: uppercase;
        color: #fff;
        text-decoration: none;
        border: none;
        background: #5c91fe;
        padding: 10px 40px;
        font-size: 14px;
        font-weight: 700;
        border-radius: 1px;
        margin-top: 15px;
        transition: 0.2s all;
    }
    a:hover{
        opacity: 0.8;
    }
</style>