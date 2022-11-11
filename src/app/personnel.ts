export class personnel{
    staffID:number;
    fullname:string
    title:string
    imgUrl:string
    job_summary:string
    fullDescription:string

    constructor(stID:number,name:string,title:string,job_sum:string,descrpition:string,url:string){
        this.staffID = stID
        this.fullname = name
        this.title = title
        this.job_summary = job_sum
        this.fullDescription = descrpition
        this.imgUrl = url
    }

}