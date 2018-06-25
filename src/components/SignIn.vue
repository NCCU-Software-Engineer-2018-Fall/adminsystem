<template>
 
  <v-container
    fluid
    style="min-height: 0;"
    grid-list-lg
  >
    <v-layout 
      row 
      wrap>
      <v-flex 
        xs6 
        offset-xs3>
        <v-card>

          <v-card-title>
            <v-container fluid>

              <div class="headline">Sign in</div><br>

              <v-form v-model="valid">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                />
                <v-text-field
                  v-model="password"
                  label="Password"
                  required
                  type="password"
                />
              </v-form>
              <div>
                <v-btn 
                  right 
                  color="info" 
                  @click="doSignIn">Submit</v-btn>
              </div>

            </v-container>
          </v-card-title>

        </v-card>
      </v-flex>
    
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    password: '',
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        'E-mail must be valid',
    ],
  }),
  methods: {
    doSignIn: function() {
      this.$store
        .dispatch('signIn', { email: this.email, password: this.password })
        .then(output => {
          if (output) {
            console.log('signIn success');
          } else {
            console.log('signIn failed');
          }
        });
    },
  },
};
</script>
