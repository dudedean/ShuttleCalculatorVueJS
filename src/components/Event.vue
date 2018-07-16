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
                            <input type="text" readonly="" class="form-control-plaintext" id="eventID" :value="event.id">
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
                                            <td><button type="button" class="btn btn-primary" @click="calculateFees(index,p.id)">Calculate</button></td>
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
export default {
    data() {
        return {
            event: {
                name: '',
                place: '',
                dateEvent: '',
                timeEvent: '',
                hall: '',
                shuttlecockfees: ''
            }, 
            event_id: this.$route.params.id,
            addPlayer: 0,
            players: [],
            newPlayer: {
                name: '',
                event_id : this.$route.params.id,
                shuttlecocks: 0,
                totalFee: 0
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
        this.fetchEvent();
        this.fetchPlayers();
    },
    methods: {
        fetchEvent(){
            this.$http.get(`http://shuttlecalculator.test/api/event/${this.event_id}`)
                .then(response => {
                    this.event = response.data.data;
                })
                .catch(error=>console.log)
        },
        deleteEvent(){

                var result = confirm("Are you sure you want to delete this event?");

                if(result == true){
                    this.$http.delete('http://shuttlecalculator.test/api/event/'+this.event_id)
                    .then(response => {
                        this.$router.push(`/`);
                        setTimeout(() => {
                            this.open('Event successfully deleted!');
                        }, 500);
                    })
                    .catch(error=>console.log)
            }
                
        },
        open(msg) {
            this.$message({
                message: msg,
                type: 'success'
            });
        },
        fetchPlayers() {

            this.$http.get(`http://shuttlecalculator.test/api/players/${this.event_id}`)
                .then(response => {
                    this.players = response.data.data;
                })
                .catch(error=>console.log)

        },
        createPlayer(){
            this.$http.post('http://shuttlecalculator.test/api/player',{
                    name: this.newPlayer.name,
                    event_id: this.newPlayer.event_id,
                    shuttlecocks: this.newPlayer.shuttlecocks,
                    totalFee: this.newPlayer.totalFee
                })
                .then(response => {
                    this.fetchPlayers();
                    this.newPlayer.name = "";
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        deletePlayer(id){

            var result = confirm("Are you sure you want to delete this player?");

            if(result == true){
                this.$http.delete('http://shuttlecalculator.test/api/player/'+id)
                .then(response => {
                    this.fetchPlayers();
                })
                .catch(error=>console.log)
            }

                
        },
        editPlayer(id,index){

            this.$http.put('http://shuttlecalculator.test/api/player/'+id,{
                    shuttlecocks: this.players[index].shuttlecocks,
                    totalFee: this.players[index].totalFee,
                })
                .then(response => {
                    this.edit = 0;
                    this.calculateFees(index,id);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        calculateFees(index,id){

            var total= (this.event.hall / this.players.length) + (this.event.shuttlecockfees * this.players[index].shuttlecocks);
                total = total.toFixed(2);
                
                this.$http.put('http://shuttlecalculator.test/api/player/'+id,{
                    totalFee: total,
                    shuttlecocks: this.players[index].shuttlecocks,
                })
                .then(response => {
                    this.fetchPlayers();                    
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        updateEvent(){

            this.$http.put('http://shuttlecalculator.test/api/event/'+this.event_id,{
                    name : this.event.name,
                    place : this.event.place,
                    dateEvent : this.event.dateEvent,
                    timeEvent : this.event.timeEvent,
                    hall : this.event.hall,
                    shuttlecockfees : this.event.shuttlecockfees,
                })
                .then(response => {
                    this.editEvent = 0;
                    this.fetchEvent();
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
    }
}
</script>

<style>

</style>