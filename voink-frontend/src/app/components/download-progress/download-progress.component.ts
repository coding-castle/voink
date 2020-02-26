import { Component, OnInit, Input } from "@angular/core"
import { VodService } from "src/app/services/vod.service"
import { NbStepperComponent } from "@nebular/theme"

@Component({
    selector: "app-download-progress",
    templateUrl: "./download-progress.component.html",
    styleUrls: ["./download-progress.component.scss"],
})
export class DownloadProgressComponent implements OnInit {
    @Input() stepper: NbStepperComponent

    constructor(public vodService: VodService) {}

    ngOnInit(): void {}

    getDownloadProgress() {
        const decimal = this.vodService.loadedChunks / this.vodService.totalChunks
        const roundedValue = Math.round(decimal * 100)
        return roundedValue
    }

    abort() {
        this.vodService.abortStream()
        this.stepper.previous()
    }
}
