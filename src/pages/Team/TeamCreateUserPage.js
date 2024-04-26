import React from 'react';
const TeamCreateUserPage = () => {

  return (
    <section className="home-section">

    <nav>

      <div className="sidebar-button">
        <i className="bx bx-menu sidebarBtn"></i>
        <span className="dashboard">Usuários - Novo</span>
      </div>
      
      <div className="profile-details">
        <img src="/img/admin/profile.jpg" alt="" />
        <span className="admin_name">Prem Shahi</span>
        <i className="bx bx-chevron-down"></i>
      </div>
    </nav>

    <div class="home-content">
        <div class="overview-boxes">
          
          <div class="box-filter">          
            <a href='/team' class="button button-default br-link">Voltar</a>
          </div>

        </div>

        <div class="sales-boxes">
          
          <div class="recent-sales-list box">

            <div id="records-section">
              
              <div class="list-container">
                
                <div class="form-container">
                  <div class="form-group">
                    <label for="username">Nome de usuário</label>
                    <input type="text" id="username" name="username" placeholder="Digite o nome do usuário"/>
                  </div>
                
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Digite o email do usuário"/>
                  </div>
                
                  <div class="form-group">
                    <label for="password">Senha</label>
                    <input type="password" id="password" name="password" placeholder="Digite a senha"/>
                  </div>
                
                  <div class="form-group">
                    <label for="status">Status</label>
                    <select id="status" name="status">
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                
                  <div class="permissions-container">
                    <div class="permissions-title">Permissões</div>


                    <div class="permissions-container">
                      <div class="permissions-title">Usuários</div>
                      <div class="checkbox-group">
                        <input type="checkbox" id="user-all-access" name="user_permission" value="all-access"/>
                        <label for="user-all-access" class="checkbox-label">Todos acessos</label>
                      </div>
                      <div class="checkbox-group">
                        <input type="checkbox" id="user-insert" name="user_permission" value="insert"/>
                        <label for="user-insert" class="checkbox-label">Insert</label>
                      </div>
                      <div class="checkbox-group">
                        <input type="checkbox" id="user-update" name="user_permission" value="update"/>
                        <label for="user-update" class="checkbox-label">Update</label>
                      </div>
                      <div class="checkbox-group">
                        <input type="checkbox" id="user-delete" name="user_permission" value="delete"/>
                        <label for="user-delete" class="checkbox-label">Delete</label>
                      </div>
                      <div class="checkbox-group">
                        <input type="checkbox" id="user-list" name="user_permission" value="list"/>
                        <label for="user-list" class="checkbox-label">List</label>
                      </div>
                    </div>
                    
                    <div class="permissions-container">
                      <div class="permissions-title">Notificações</div>
                      <div class="checkbox-group">
                        <input type="checkbox" id="notifications-all-access" name="notifications_permission" value="all-access"/>
                        <label for="notifications-all-access" class="checkbox-label">Todos acessos</label>
                      </div>
                      <div class="checkbox-group">
                        <input type="checkbox" id="notifications-insert" name="notifications_permission" value="insert"/>
                        <label for="notifications-insert" class="checkbox-label">Insert</label>
                      </div>
                      <div class="checkbox-group">
                        <input type="checkbox" id="notifications-update" name="notifications_permission" value="update"/>
                        <label for="notifications-update" class="checkbox-label">Update</label>
                      </div>
                    </div>
                    
                    <div class="permissions-container">
                      <div class="permissions-title">Grupos</div>
                      <div class="checkbox-group">
                        <input type="checkbox" id="groups-all-access" name="groups_permission" value="all-access"/>
                        <label for="groups-all-access" class="checkbox-label">Todos acessos</label>
                      </div>
                      <div class="checkbox-group">
                        <input type="checkbox" id="groups-insert" name="groups_permission" value="insert"/>
                        <label for="groups-insert" class="checkbox-label">Insert</label>
                      </div>
                      <div class="checkbox-group">
                        <input type="checkbox" id="groups-delete" name="groups_permission" value="delete"/>
                        <label for="groups-delete" class="checkbox-label">Delete</label>
                      </div>
                    </div>

                  </div>
                  
                
                  <div class="action-buttons">
                    <button type="submit" class="button button-cadastrar">Cadastrar</button>
                    <button type="button" class="button button-cancelar">Cancelar</button>
                    <a href='/team' class="button button-voltar br-link">Voltar</a>
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

export default TeamCreateUserPage;
