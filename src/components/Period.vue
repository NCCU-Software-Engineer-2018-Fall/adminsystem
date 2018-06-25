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
      <td class="text-xs-right">{{ props.item.period_id }}</td>
      <td class="text-xs-right">{{ props.item.symbol }}</td>
      <td class="text-xs-right">{{ props.item.start_time }}</td>
      <td class="text-xs-right">{{ props.item.end_time }}</td>
      <td class="text-xs-right">{{ props.item.period_name }}</td>      
      <td class="text-xs-right">{{ props.item.status }}</td>
      <td class="text-xs-right">{{ props.item.creation_time }}</td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'id', value: 'id' },
        { text: 'period Id', value: 'period_id' },
        { text: 'Symbol', value: 'symbol' },
        { text: 'Start Time', value: 'start_time' },
        { text: 'End Time', value: 'end_time' },
        { text: 'Period Time', value: 'period_name' },
        { text: 'Status', value: 'status' },
        { text: 'create time', value: 'creation_time' },
      ],
    };
  },
  computed: {
    users: function() {
      return this.$store.getters.getPeriodList;
    },
  },
  mounted() {
    this.$store.dispatch('getAllPeriod');
  },
};
</script>
