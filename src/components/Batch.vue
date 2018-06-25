<template>
  <v-data-table
    :headers="headers"
    :items="users"
    hide-actions
    class="elevation-1"
  >
    <template 
      slot="items" 
      slot-scope="props">
      <td>{{ props.item.id }}</td>
      <td class="text-xs-right">{{ props.item.batch_id }}</td>
      <td class="text-xs-right">{{ props.item.user_id }}</td>
      <td class="text-xs-right">{{ props.item.title }}</td>
      <td class="text-xs-right">{{ props.item.status }}</td>
      <td class="text-xs-right">{{ props.item.create_time }}</td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'id', value: 'id' },
        { text: 'Batch Id', value: 'batch_id' },
        { text: 'user id', value: 'user_id' },
        { text: 'Title', value: 'title' },
        { text: 'Status', value: 'status' },
        { text: 'create time', value: 'create_time' },
      ],
    };
  },
  computed: {
    users: function() {
      return this.$store.getters.getBatchList;
    },
  },
  mounted() {
    this.$store.dispatch('getAllBatch');
  },
};
</script>
