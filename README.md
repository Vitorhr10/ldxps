<h1>Database</h1>

<p>One seller has multiple clients and one client has jus one seller.<p>

<ol>
  <li>Landix has multiple clients, such as, Coca cola, Nico, Atacadão, etc.</li>
  <li>Coca cola has just seller, Landix.</li>
</ol>

It explains why the relationship between Seller and Client is one to many(1 to N).

<h2>Entities</h2>

<p>Vendedores</p>

<ol>
  <ul>cdvend</ul>
  <ul>dsnome</ul>
  <ul>cdtab</ul>
  <ul>dtnasc</ul>
</ol>

<p>Clientes</p>

<ol>
  <ul>cdcl</ul>
  <ul>dsnome</ul>
  <ul>idtipo <strong> (default PF)</strong></ul>
  <ul>dslim</ul>
  <ul>cdvend <strong> (FK to Sellers table)</strong></ul>
</ol>

