<template>
    
    <div class="row">

        <div class="col-xs-12 col-sm-12 col-md-12 mt-4">
            <div class="card border-success mb-3">
                <div class="card-header"><h4><strong>Create New Match</strong></h4></div>
                <div class="card-body">
                    
                        <div class="form-group row">
                            <label for="name" class="col-sm-2 col-md-4 col-form-label">Event Name</label>
                            <div class="col-sm-10 col-md-6">
                                <input type="text" v-model="event.name" class="form-control" id="name" placeholder="Badminton Persahabatan">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="eventID" class="col-sm-2 col-md-4 col-form-label">Event ID</label>
                            <div class="col-sm-10 col-md-6">
                                <input type="text" v-model="event.id" class="form-control" id="eventID" placeholder="20">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="place" class="col-sm-2 col-md-4 col-form-label">Location</label>
                            <div class="col-sm-10 col-md-6">
                                <input type="text" v-model="event.place" class="form-control" id="place" placeholder="Dewan Depo">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="hall" class="col-sm-2 col-md-4 col-form-label">Hall Price (RM)</label>
                            <div class="col-sm-10 col-md-6">
                                <input type="text" v-model="event.hall" class="form-control" id="hall" placeholder="15">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="shuttlecockfees" class="col-sm-2 col-md-4 col-form-label">Shuttlecock / Person (RM)</label>
                            <div class="col-sm-10 col-md-6">
                                <input type="text" v-model="event.shuttlecockfees" class="form-control" id="shuttlecockfees" placeholder="2">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="dateEvent" class="col-sm-2 col-md-4 col-form-label">Date</label>
                            <div class="col-sm-10 col-md-6">
                                
                                <el-date-picker
                                    v-model="event.date"
                                    type="date"
                                    placeholder="Pick a day"
                                    :picker-options="pickerOption"
                                    format="dd-MM-yyyy"
                                    value-format="yyyy-MM-dd">
                                </el-date-picker>

                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="timeEvent" class="col-sm-2 col-md-4 col-form-label">Time</label>
                            <div class="col-sm-10 col-md-6">

                                <el-time-select
                                    v-model="event.time"
                                    :picker-options="{
                                        start: '18:00',
                                        step: '00:30',
                                        end: '23:00'
                                    }"
                                    placeholder="Select time">
                                </el-time-select>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-6 col-xs-6 col-md-6">
                                <button type="submit" @click="createEvent()" class="btn btn-success float-left">Submit</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>

import db from './firebaseInit'

export default {

    data(){

        return{
            pickerOption: { 
                disabledDate : function(date) {
                    return date < new Date();
                }
             },
            event: {
                name: '',
                id: '',
                place: '',
                hall: '',
                shuttlecockfees: '',
                date: '',
                time: ''
            }
        }
    },
    methods: {
        createEvent() {
            // this.$http.post('http://shuttlecalculator.test/api/event/create',{
            //         name: this.event.name,
            //         place: this.event.place,
            //         hall: this.event.hall,
            //         shuttlecockfees: this.event.shuttlecockfees,
            //         dateEvent: this.event.date,
            //         timeEvent: this.event.time,
            //     })
            //     .then(response => {
            //         this.$router.push(`/event/${response.data.data.id}`);
            //         setTimeout(() => {
            //             this.open();
            //         }, 500);
            //         // console.log(response);
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     });

            db.collection('events').add({
                id : this.event.id,
                name : this.event.name,
                place : this.event.place,
                hall : this.event.hall,
                shuttlecockfees : this.event.shuttlecockfees,
                dateEvent : this.event.date,
                timeEvent : this.event.time,
            })
            .then(docRef => {
                this.$router.push('/')
            })


        },
        open() {
            this.$message({
                message: 'Congrats, event successfully created!.',
                type: 'success'
            });
        },
    }

}


    
</script>
