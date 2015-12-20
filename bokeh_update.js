// Generated by CoffeeScript 1.9.2
(function() {
  requirejs.undef('bokeh_update');
  define('bokeh_update', [], function() {
    var bokeh_update_target;
    bokeh_update_target = function(comm, msg) {
      comm.on_msg(function(m) {
        var data, ds;
        data = m.content.data;
        switch (false) {
          case !(data.custom_type === "replace_bokeh_data_source"):
            ds = Bokeh.Collections(data.ds_model).get(data.ds_id);
            ds.set($.parseJSON(data.ds_json));
            return ds.trigger("change");
        }
      });
      return comm.on_close(function(m) {
      });
    };
    return {
      'bokeh_update_target': bokeh_update_target
    };
  });

}).call(this);

//# sourceMappingURL=bokeh_update.js.map
