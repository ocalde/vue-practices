'use strict';

new Vue({
    el: '#exercise',
    data: {
        value: 'Hola',
        val: 'Hol'
    },
    methods: {
        showAlert: function(evt) {
            alert('Alert');
        },
        storeValue: function(evt) {
            this.value = evt.target.value;
        }
    }
});