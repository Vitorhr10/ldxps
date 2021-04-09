<h1>Database</h1>

<p>One seller has multiple clients and one client has jus one seller.<p>

<ol>
  <li>Landix has multiple clients, such as, Coca cola, Nico, Atacadão, etc.</li>
  <li>Coca cola has just seller, Landix.</li>
</ol>

It explains why the relationship between Seller and Client is one to many(1 to N).

<h2>Entities</h2>

<p>Sellers</p>

<ol>
  <ul>id</ul>
  <ul>name</ul>
  <ul>table_id</ul>
  <ul>birth_date</ul>
</ol>

<p>Clients</p>

<ol>
  <ul>name</ul>
  <ul>type_id <strong> (default PF)</strong></ul>
  <ul>birth_date</ul>
  <ul>desc_limit</ul>
  <ul>id <strong> (FK to Sellers table)</strong></ul>
</ol>

