<template>
  <div>
    <Nav></Nav>
    <CinemasItem></CinemasItem>
  </div>
</template>

<script>
import Nav from "./Nav";
import CinemasItem from "./cinemasItem";

export default {
    data () {
        return {
            
        }
    },
    components: {
        Nav,
        CinemasItem
    }
}
</script>