export default {
    props: {
        localVisible: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:localVisible', false)
        }
    },
    mounted() {

    },
    //....
}