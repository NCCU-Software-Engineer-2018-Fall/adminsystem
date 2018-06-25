<template>
 
  <v-container
    fluid
    style="min-height: 0;"
    grid-list-lg
  >
    <v-layout 
      row 
      wrap>
      <v-flex xs6>
        <v-card>

          <v-card-title>
            <v-container fluid>

              <div>Sign in</div><br>

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
            </v-container>
          </v-card-title>

          <v-card-actions>
            <v-btn 
              flat 
              dark>Listen now</v-btn>
          </v-card-actions>
         
        </v-card>
      </v-flex>
      


      <v-flex xs12>
        <v-card 
          color="purple" 
          class="white--text">
          <v-container 
            fluid 
            grid-list-lg>
            <v-layout row>
              <v-flex xs7>
                <div>
                  <div class="headline">Halycon Days</div>
                  <div>Ellie Goulding</div>
                </div>
              </v-flex>
              <v-flex xs5>
                <v-card-media
                  src="/static/doc-images/cards/halcyon.png"
                  height="125px"
                  contain
                />
              </v-flex>
            </v-layout>
          </v-container>
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
};
</script>
