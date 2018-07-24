<template>
    <div class="mt-2">

        <div class="row" v-if="editEvent === 0">
            <div class="col-12 col-xs-12 col-md-12 col-sm-12">
                <div class="card border-info mb-3">
                    <div class="card-header">{{event.name}}</div>
                    <div class="card-body">
                        <div class="form-group row">
                        <label for="eventID" class="col-4 col-sm-2 col-form-label">Event ID</label>
                        <div class="col-8 col-sm-10">
                            <input type="text" readonly="" class="form-control-plaintext" id="eventID" :value="event.id">
                        </div>
                        </div>

                        <div class="form-group row">
                        <label for="location" class="col-4 col-sm-2 col-form-label">Location</label>
                        <div class="col-8 col-sm-10">
                            <input type="text" readonly="" class="form-control-plaintext" id="location" :value="event.place">
                        </div>
                        </div>

                        <div class="form-group row">
                        <label for="hall" class="col-4 col-sm-2 col-form-label">Hall Price (RM)</label>
                        <div class="col-8 col-sm-10">
                            <input type="text" readonly="" class="form-control-plaintext" id="hall" :value="event.hall">
                        </div>
                        </div>

                        <div class="form-group row">
                        <label for="shuttlecockfees" class="col-4 col-sm-2 col-form-label">Shuttlecock / Person (RM)</label>
                        <div class="col-8 col-sm-10">
                            <input type="text" readonly="" class="form-control-plaintext" id="shuttlecockfees" :value="event.shuttlecockfees">
                        </div>
                        </div>

                        <div class="form-group row">
                        <label for="date" class="col-4 col-sm-2 col-form-label">Date</label>
                        <div class="col-8 col-sm-10">
                            <input type="text" readonly="" class="form-control-plaintext" id="date" :value="event.dateEvent">
                        </div>
                        </div>

                        <div class="form-group row">
                        <label for="time" class="col-4 col-sm-2 col-form-label">Time</label>
                        <div class="col-8 col-sm-10">
                            <input type="text" readonly="" class="form-control-plaintext" id="time" :value="event.timeEvent">
                        </div>
                        </div>

                        <el-row>
                            <el-button type="primary" icon="el-icon-edit" circle @click="editEvent = 1"></el-button>
                            <el-button type="danger" @click="deleteEvent" icon="el-icon-delete" circle></el-button>
                        </el-row>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" v-if="editEvent === 1">
            <div class="col-12 col-xs-12 col-md-12 col-sm-12">
                <div class="card border-info mb-3">
                    <div class="card-header"></div>
                    <div class="card-body">


                        <div class="form-group row">
                        <label for="eventID" class="col-4 col-sm-2 col-form-label">Event ID</label>
                        <div class="col-8 col-sm-10">
                            <input type="text" readonly="" class="form-control-plaintext" id="eventID" v-model="event.id">
                        </div>
                        </div>

                        <div class="form-group row">
                        <label for="eventName" class="col-4 col-sm-2 col-form-label">Event Name</label>
                        <div class="col-8 col-sm-10 col-md-4">
                            <input type="text" class="form-control" id="eventName" v-model="event.name">
                        </div>
                        </div>

                        <div class="form-group row">
                        <label for="location" class="col-4 col-sm-2 col-form-label">Location</label>
                        <div class="col-8 col-sm-10 col-md-4">
                            <input type="text" class="form-control" id="location" v-model="event.place">
                        </div>
                        </div>

                        <div class="form-group row">
                        <label for="hall" class="col-4 col-sm-2 col-form-label">Hall Price (RM)</label>
                        <div class="col-8 col-sm-10 col-md-4">
                            <input type="text" class="form-control" id="hall" v-model="event.hall">
                        </div>
                        </div>

                        <div class="form-group row">
                        <label for="shuttlecockfees" class="col-4 col-sm-2 col-form-label">Shuttlecock / Person (RM)</label>
                        <div class="col-8 col-sm-10 col-md-4">
                            <input type="text" class="form-control" id="shuttlecockfees" v-model="event.shuttlecockfees">
                        </div>
                        </div>

                        <div class="form-group row">
                        <label for="date" class="col-4 col-sm-2 col-form-label">Date</label>
                        <div class="col-8 col-sm-10 col-md-4">
                            <el-date-picker
                                    v-model="event.dateEvent"
                                    type="date"
                                    placeholder="Pick a day"
                                    :picker-options="pickerOption"
                                    format="dd-MM-yyyy"
                                    value-format="yyyy-MM-dd">
                            </el-date-picker>
                        </div>
                        </div>

                        <div class="form-group row">
                        <label for="time" class="col-4 col-sm-2 col-form-label">Time</label>
                        <div class="col-8 col-sm-10 col-md-4">
                            <el-time-select
                                    v-model="event.timeEvent"
                                    :picker-options="{
                                        start: '18:00',
                                        step: '00:30',
                                        end: '23:00'
                                    }"
                                    placeholder="Select time">
                            </el-time-select>
                        </div>
                        </div>

                        <el-row>
                                <el-button type="success" icon="el-icon-check" circle @click="updateEvent"></el-button>
                                <el-button @click="editEvent = 0" icon="el-icon-back" circle></el-button>
                        </el-row>
                    </div>
                </div>
            </div>
        </div>


        <!-- <el-row :gutter="20">
            <el-col :span="16">
                <el-dialog
                    title="Warning"
                    :visible.sync="deleteEventDialog"
                    width="30%"
                    center>
                    <span>It should be noted that the content will not be aligned in center by default</span>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="deleteEventDialog = false">Cancel</el-button>
                        <el-button type="primary" @click="deleteEventDialog = false">Confirm</el-button>
                    </span>
                </el-dialog>
            </el-col>
            
        </el-row> -->
        
        <div class="row">
            <div class="col-12 col-xs-12 col-md-12 col-sm-12">
                <div class="card border-info mb-3">
                    <div class="card-header">Players</div>
                    <div class="card-body">
                        <button type="button" v-if="addPlayer === 0" @click="addPlayer = 1" class="btn btn-primary">Add Player</button>
                    
                        <div class="row">
                            <div class="col-5 col-sm-6 col-md-6">
                                <div class="form-group" v-if="addPlayer === 1">
                                    <label for="name">Name</label>
                                    <input type="text" v-model="newPlayer.name" class="form-control" id="name" placeholder="Enter Name">
                                </div>
                            </div>

                            <div class="col-4 col-sm-3 col-md-3 mt-4" style="margin-top : 3px;">
                                <button type="button" v-if="addPlayer === 1" class="btn btn-success" style="margin-top : 5px;" @click="createPlayer">Create Player</button>
                            </div>

                            <div class="col-3 col-sm-3 col-md-3 mt-4" >
                                <button type="button" v-if="addPlayer === 1" @click="addPlayer = 0" class="btn btn-danger" style="margin-top : 5px;">X</button>
                            </div>
                        </div>
                        
                        <div class="row">
                            
                            <div class="col-12 col-md-12">
                                <div class="table-responsive-sm">
                                    <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">No. </th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Shuttlecock used</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                            <th scope="col">Total (RM)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(p,index) in players" :key="p.id">
                                            <td>{{ index+1 }}</td>
                                            <td>{{ p.name }}</td>
                                            <td>
                                                <input type="text" v-if="edit === 0" readonly="" class="form-control-plaintext" :value="players[index].shuttlecocks">
                                                <input type="number" v-if="edit === 1" class="form-control" v-model="players[index].shuttlecocks">
                                            </td>
                                            <td>
                                                <!-- <el-button v-if="edit === 0" @click="edit = 1" type="primary" icon="el-icon-edit" circle></el-button>
                                                <el-button v-if="edit === 1" @click="editPlayer(p.id,index)" type="success" icon="el-icon-check" circle></el-button> -->

                                                <button type="button" v-if="edit === 0" @click="edit = 1" class="btn btn-warning">Edit</button>
                                                <button type="button" v-if="edit === 1" @click="editPlayer(p.id,index)" class="btn btn-success">Update</button>

                                            </td>
                                            <!-- <td><el-button type="danger" icon="el-icon-delete" circle @click="deletePlayer(p.id)"></el-button></td> -->
                                            <td><button type="button" class="btn btn-danger" @click="deletePlayer(p.id)">Delete</button></td>
                                            <!-- <td><el-button icon="el-icon-tickets" circle @click="calculateFees(index,p.id)"></el-button></td> -->
                                            <!-- <td><button type="button" class="btn btn-primary" @click="calculateFees(index,p.id)">Calculate</button></td> -->
                                            <td>{{ p.totalFee }}</td>
                                        </tr>
                                    </tbody>
                                </table> 
                                </div>
        
                            </div>

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
    data() {
        return {
            event: {
                name: '',
                id: this.$route.params.event_id,
                place: '',
                dateEvent: '',
                timeEvent: '',
                hall: '',
                shuttlecockfees: '',
            }, 
            sizeCol : 0,
            addPlayer: 0,
            players: [],
            newPlayer: {
                name: '',
            },
            edit: 0,
            editEvent: 0,
            pickerOption: { 
                disabledDate : function(date) {
                    return date < new Date();
                }
            },
        }
    },
    created() {
        this.fetchPlayers();
        
    },
    beforeRouteEnter (to, from, next) {
        db.collection('events').where('id','==',to.params.event_id).get()
        .then(querySnapshot => {
            querySnapshot.forEach( doc => {
                next(vm => {

                    vm.event.name = doc.data().name
                    vm.event.place = doc.data().place
                    vm.event.dateEvent = doc.data().dateEvent
                    vm.event.timeEvent = doc.data().timeEvent
                    vm.event.hall = doc.data().hall
                    vm.event.shuttlecockfees = doc.data().shuttlecockfees
                })
            })
        })
    },
    watch: {
        '$route' : 'fetchEvent'
    },
    methods: {
        fetchEvent(){

            db.collection('events').where('id', '==', this.$route.params.event_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {

                    this.event.name = doc.data().name;
                    this.event.place = doc.data().place;
                    this.event.dateEvent = doc.data().dateEvent;
                    this.event.timeEvent = doc.data().timeEvent;
                    this.event.hall = doc.data().hall;
                    this.event.shuttlecockfees = doc.data().shuttlecockfees;

                })
            })
        },
        deleteEvent(){

                var result = confirm("Are you sure you want to delete this event?");

                if(result == true){
                
                    db.collection('events').where('id', '==', this.$route.params.event_id).get()
                    .then(querySnapshot => {
                        querySnapshot.forEach(doc => {
                            doc.ref.delete();
                            this.$router.push('/');
                        })
                    })
            }
                
        },
        open(msg) {
            this.$message({
                message: msg,
                type: 'success'
            });
        },
        fetchPlayers() {

            db.collection('players').where('event_id','==',this.event.id).get()
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => {
                    const data = {
                        id : doc.data().id,
                        name : doc.data().name,
                        shuttlecocks : doc.data().shuttlecocks,
                        totalFee : doc.data().totalFee,
                    }
                    
                    this.players.push(data);
                })

                this.sizeCol = querySnapshot.size;
            })

        },
        createPlayer(){
            
            db.collection('players').add({
                id : this.sizeCol++,
                name : this.newPlayer.name,
                event_id : this.event.id,
                shuttlecocks : 0,
                totalFee : 0.0,
                
            })
            .then(() => {
                this.newPlayer.name = ''
                this.updateFees()
            })

        },
        deletePlayer(id){

            var result = confirm("Are you sure you want to delete this player?");

                if(result == true){
                
                    db.collection('players').where('id', '==', id).get()
                    .then(querySnapshot => {
                        querySnapshot.forEach(doc => {
                            doc.ref.delete();
                        })
                    })
                    .then(()=>{
                        this.players = []
                        this.updateFees()
                    })
            }

                
        },
        editPlayer(id,index){
            // var total= (this.event.hall / this.players.length) + (this.event.shuttlecockfees * this.players[index].shuttlecocks);
            //     total = total.toFixed(2);

            db.collection('players').where('id', '==', id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.update({
                        shuttlecocks : this.players[index].shuttlecocks,
                    })
                })
            }).then(() => {
                        this.edit = 0
                        this.updateFees()
                    })
            
            
        },
        updateFees(){

            db.collection('players').where('event_id','==',this.event.id).get()
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => {

                    var total= (this.event.hall / querySnapshot.size) + (this.event.shuttlecockfees * parseFloat(doc.data().shuttlecocks));
                    total = total.toFixed(2);

                    doc.ref.update({
                        totalFee : total
                    })
                })
            }).then(() => {
                        this.edit = 0
                        this.players=[]
                        this.fetchPlayers()
                    })
            
        },
        updateEvent(){

            db.collection('events').where('id', '==', this.event.id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.update({
                        name : this.event.name,
                        id : this.event.id,
                        place : this.event.place,
                        dateEvent : this.event.dateEvent,
                        timeEvent : this.event.timeEvent,
                        hall : this.event.hall,
                        shuttlecockfees : this.event.shuttlecockfees,
                    }).then(() => {
                        this.editEvent = 0;
                        this.fetchEvent();
                    })
                })
            })
        }
    }
}
</script>

<style>

</style>