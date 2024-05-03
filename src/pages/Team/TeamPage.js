import React from 'react';
import Profile from '../../components/Profile';

const TeamPage = () => {

  return (
    <section className="home-section">

    <nav>
      <div className="sidebar-button">
        <i className="bx bx-menu sidebarBtn"></i>
        <span className="dashboard">Usuários - Lista</span>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <i className="bx bx-search"></i>
      </div>
      <Profile/>
    </nav>

    <div class="home-content">
        <div class="overview-boxes">
          
          <div class="box-filter">
          
            <div class="search-actions-container">
              <input type="text" id="filter-input" placeholder="Nome usuário..."/>
              <button class="button button-primary">Buscar</button>
              <button class="button button-secondary">Cancelar</button>
              <a href='/team/usuario/novo' class="button button-default br-link">Novo</a>
            </div>
            

          </div>
        </div>

        <div class="sales-boxes">
          
          <div class="recent-sales-list box">
            <div id="records-section">
              
              <div class="list-container">

                <div class="list-header">
                  <div class="list-head">ID</div>
                  <div class="list-head">Nome</div>
                  <div class="list-head">Email</div>
                  <div class="list-head">Status</div>
                  <div class="list-head">&nbsp;</div>
                </div>

                <div class="list-item">

                  <div class="list-cell">01</div>
                  <div class="list-cell">Fulano de tal</div>
                  <div class="list-cell">fulano-de-tal@gmail.com</div>
                  <div class="list-cell">Liberado</div>
                  
                  <div class="list-cell">
                    
                    <div class="actions-container">

                      <a href='/team/usuario/editar' class="action-button edit-button br-link">
                        <i class="fa fa-edit"></i>Editar
                      </a>

                      <a href='/team/usuario/remover' class="action-button remove-button br-link">
                        <i class="fa fa-trash"></i>Remover
                      </a>

                    </div>
                    
                  </div>
                </div>


                <div class="list-item">

                  <div class="list-cell">02</div>
                  <div class="list-cell">Fulano de tal</div>
                  <div class="list-cell">fulano-de-tal@gmail.com</div>
                  <div class="list-cell">Bloqueado</div>
                  
                  <div class="list-cell">
                    <div class="actions-container">

                      <a href='/team/usuario/editar' class="action-button edit-button br-link">
                        <i class="fa fa-edit"></i>Editar
                      </a>

                      <a href='/team/usuario/remover' class="action-button remove-button br-link">
                        <i class="fa fa-trash"></i>Remover
                      </a>

                    </div>
                    
                  </div>
                </div>


              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    
  </section>  
  );
};

export default TeamPage;
