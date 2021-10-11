<div>
  <h1>Breweries List</h1>
  <label><b>per page :</b></label
  >&nbsp;
  <select #pp (change)="getperpage(pp.value)">
    <option value="15">15</option>
    <option value="25">25</option>
    <option value="50">50</option>
  </select>
  &nbsp;&nbsp;&nbsp; <label><b>orderby :</b></label
  >&nbsp;
  <select #ob (change)="orderby(ob.value)">
    <option value="asc">asc</option>
    <option value="desc">desc</option>
  </select>
  <hr />
  <table id="breweries" style="width: 90%; margin-left: 25px">
    <tr>
      <th>
        <button (click)="sortby('id')" class="btn btn-secondary">ID</button>
      </th>
      <th>
        <button (click)="sortby('name')" class="btn btn-secondary">NAME</button>
      </th>
      <th>
        <button (click)="sortby('brewery_type')" class="btn btn-secondary">
          BREWERY TYPE
        </button>
      </th>
      <th>
        <button (click)="sortby('postal_code')" class="btn btn-secondary">
          POSTAL CODE
        </button>
      </th>
      <th>
        <button (click)="sortby('country')" class="btn btn-secondary">
          COUNTRY
        </button>
      </th>
    </tr>

    <tr *ngFor="let brewery of breweries">
      <td>
        {{ brewery.id }}
      </td>
      <td>
        {{ brewery.name }}
      </td>
      <td>
        {{ brewery.brewery_type }}
      </td>
      <td>
        {{ brewery.postal_code }}
      </td>
      <td>
        {{ brewery.country }}
      </td>
    </tr>
  </table>
</div>

<router-outlet></router-outlet>
