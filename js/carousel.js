console.log("vue ok", Vue);


//created vue app
const { createApp } = Vue;
const app = createApp({
    data: () => ({
        destinations,
        currentIndex: 0
    })
});


app.mount("#root");