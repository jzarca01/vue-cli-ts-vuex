<template>
  <div class="form">
    <img src="../assets/logo.png">
    <Form :items="form.items" :model="model" />
    <Button name="submitButton" type="primary" value="Submit" :onClick="submitPost" />
    <Button name="cancelButton" type="plain" value="Cancel" :onClick="cancelPost" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { Mutation } from 'vuex-class';
import { TableState } from '@/store/modules/table/types';

import Form from 'Components/Form.vue';
import Button from 'Components/Button.vue';

const namespace: string = 'table';

@Component({
    components: {
        Form,
        Button,
    },
})
export default class Table extends Vue {
    @Prop()
    public id: string;

    @Mutation('addItem', { namespace }) public addItem: any;

    public form: any = {
        items: [
        {
            name: 'id',
            value: 0,
        },
        {
            name: 'userId',
            value: 0,
        },
        {
            name: 'title',
            value: '',
        },
        {
            name: 'body',
            value: '',
        },
        ],
    };

    public model = {
        id: '',
        userId: '',
        title: '',
        body: '',
    };

    public async submitPost() {
        await this.addItem({ item: this.model });
        this.$router.push('table');
    }

    public cancelPost(): void {
      this.$router.go(-1);
    }
}
</script>