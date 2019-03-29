new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
            result: function() {
                return this.value !== 37 ? 'Not there yet' : '';
            }
        },
        watch: {
            value: function() {
                let elData = this;
                setTimeout(function() {
                    elData.value = 0;
                }, 5000);
            }
        }
    });