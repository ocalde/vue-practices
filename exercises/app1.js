'use strict';

new Vue({
    el: "#exercise",
    data: {
        name: "Oscar Calderon",
        age: 31,
        imageSrc: "https://avatars3.githubusercontent.com/u/10198221?s=400&v=4"
    },
    methods: {
        getRandomNumber: function() {
            return Math.random(1);
        },
        changeName: function(evt) {
            this.name = evt.target.value;
        }
    }
});