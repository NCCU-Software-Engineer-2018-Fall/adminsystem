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
      <td class="text-xs-right">{{ props.item.student_name }}</td>
      <td class="text-xs-right">{{ props.item.classroom_name }}</td>
      <td class="text-xs-right">{{ props.item.period_name }}</td>
      <td class="text-xs-right">{{ props.item.symbol }}</td>
      <td class="text-xs-right">{{ props.item.hash_check }}</td>
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
        { text: 'apointment id', value: 'id' },
        { text: 'Student name', value: 'student_name' },
        { text: 'Classroom Name', value: 'classroom_name' },
        { text: 'Period Time', value: 'period_name' },
        { text: 'Period', value: 'symbol' },
        { text: 'hash check', value: 'hash_check' },
        { text: 'Status', value: 'status' },
        { text: 'create time', value: 'creation_time' },
      ],
    };
  },
  computed: {
    users: function() {
      return this.$store.getters.getAppointmentList;
    },
  },
  mounted() {
    this.$store.dispatch('getAllAppointment');
  },
};
</script>
