export default {
  name: 'hello',
  props: ['firstName'],
  data: function () {
    return {
    };
  },
  methods: {
  },
  computed: {
    salutation: function () {
      let hourOfDay = new Date().getHours();
      if (hourOfDay < 12) {
        return 'Good morning, ' + this.firstName;
      } else if (hourOfDay < 20) {
        return 'Good afternoon, ' + this.firstName;
      } else {
        return 'Good night, ' + this.firstName;
      }
    }
  }
};
