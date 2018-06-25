<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-toolbar 
        flat 
        class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="/public/title.png" >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Admin</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list dense>
        <v-divider/>
        <v-list-tile @click="goToUser">
          <v-list-tile-action>
            <v-icon>face</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>User</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="goToPeriod">
          <v-list-tile-action>
            <v-icon>query_builder</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Period</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="$router.push('/classroom')">
          <v-list-tile-action>
            <v-icon>domain</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Classroom</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="$router.push('/appointment')">
          <v-list-tile-action>
            <v-icon>assignment</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>appointment</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="$router.push('/batch')">
          <v-list-tile-action>
            <v-icon>chrome_reader_mode</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Batch</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar 
      color="indigo" 
      dark 
      fixed 
      app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title>Management</v-toolbar-title>

    </v-toolbar>
    <v-content>
      
      <router-view/> 
      <!-- body part -->
    </v-content>
    <v-footer 
      color="indigo" 
      app>
      <span class="white--text">&copy; 2018</span>
    </v-footer>

    
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    dialog2: false,
    items: ['All', 'Family', 'Friends', 'Coworkers'],
  }),
  methods: {
    goToUser() {
      this.$router.push('/user');
    },
    goToPeriod() {
      this.$router.push('/period');
    },
  },
};
</script>
