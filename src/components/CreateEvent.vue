<template>
    
    <div class="row">

        <div class="col-xs-12 col-sm-12 col-md-12 mt-4">
            <div class="card border-success mb-3">
                <div class="card-header"><h4><strong>Create New Match</strong></h4></div>
                <div class="card-body">
                    
                        <div class="form-group row">
                            <label for="name" class="col-sm-2 col-md-4 col-form-label">Event Name</label>
                            <div class="col-sm-10 col-md-6">
                                <input type="text" class="form-control" id="name" placeholder="Badminton Persahabatan">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="location" class="col-sm-2 col-md-4 col-form-label">Location</label>
                            <div class="col-sm-10 col-md-6">
                                <input type="text" class="form-control" id="location" placeholder="Dewan Depo">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="hall" class="col-sm-2 col-md-4 col-form-label">Hall Price (RM)</label>
                            <div class="col-sm-10 col-md-6">
                                <input type="text" class="form-control" id="hall" placeholder="15">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="shuttlecockfees" class="col-sm-2 col-md-4 col-form-label">Shuttlecock / Person (RM)</label>
                            <div class="col-sm-10 col-md-6">
                                <input type="text" class="form-control" id="shuttlecockfees" placeholder="2">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="dateEvent" class="col-sm-2 col-md-4 col-form-label">Date</label>
                            <div class="col-sm-10 col-md-6">
                                <datepicker v-model="state" name="uniquename" class="form-control"></datepicker>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="timeEvent" class="col-sm-2 col-md-4 col-form-label">Time</label>
                            <div class="col-sm-10 col-md-6">
                                <input type="text" class="form-control" id="timeEvent" placeholder="20:20">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-6 col-xs-6 col-md-6">
                                <button type="submit" class="btn btn-primary float-left">Submit</button>
                                <button type="reset" class="btn btn-primary float-left ml-4">Clear</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>

export default {

    data(){
        return{
            state: ''
        }
    }

}


    
</script>
