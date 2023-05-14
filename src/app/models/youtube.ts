export class Youtube {
    id!: string;
    title!: string;
    url!: string;
    channelName!: string;
    channelIcon!: string;
    uploadedAt!: string;
    duration_formatted!: string;
    views!: number;

    constructor(
        id?: string,
        title?: string,
        url?: string,
        channelName?: string,
        channelIcon?: string,
        uploadedAt?: string,
        duration_formatted?: string,
        views?: number
    ){
        this.id = id!;
        this.title = title!;
        this.url = url!
        this.channelName = channelName!;
        this.channelIcon = channelIcon!;
        this.uploadedAt = uploadedAt!;
        this.duration_formatted = duration_formatted!;
        this.views = views!;
    }
}
