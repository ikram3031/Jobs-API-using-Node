
const getAllJobs = async(req,res) => {
    res.send('Get All Jobs')
}
const getJob = async(req,res) => {
    res.send('Get Job')
}
const createJob = async(req,res) => {
    res.send('createJob ')
}
const updateJob = async(req,res) => {
    res.send('update job')
}
const deleteJob = async(req,res) => {
    res.send('Delete Job')
}


module.exports = {
    getAllJobs, getJob, createJob, updateJob, deleteJob
}
