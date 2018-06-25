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
      <td class="text-xs-right">{{ props.item.classroom_id }}</td>
      <td class="text-xs-right">{{ props.item.classroom_name }}</td>
      <td class="text-xs-right">{{ props.item.building }}</td>
      <td class="text-xs-right">{{ props.item.floor }}</td>
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
        { text: 'classroom Id', value: 'classroom_id' },
        { text: 'Classroom Name', value: 'classroom_name' },
        { text: 'building', value: 'building' },
        { text: 'Floor', value: 'floor' },
        { text: 'Status', value: 'status' },
        { text: 'create time', value: 'creation_time' },
      ],
    };
  },
  computed: {
    users: function() {
      return this.$store.getters.getClassroomList;
    },
  },
  mounted() {
    this.$store.dispatch('getAllClassroom');
  },
};
</script>
