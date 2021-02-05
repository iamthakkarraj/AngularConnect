import { Component, OnInit } from '@angular/core';
import { TagsService } from '../../../service/examples/tags.service';
import { Tag } from '../../../objects/class/Tag';


@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags: Tag[] = [];

  constructor(private tagService: TagsService) { }

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll(){
    this.tagService.GetAll().subscribe( result => {
      this.tags = result;    
      console.log(this.tags);
    });    
  }

}
