<template>
    <div>
        <hr>
        Child counter : {{ childCounter }} <br>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
     ...mapGetters({
      childCounter : 'getCounter'
      })
    },
    
}
</script>